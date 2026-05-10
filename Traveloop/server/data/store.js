import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "traveloop-data.json");

const emptyData = {
  users: [],
  trips: [],
  stops: [],
  activities: [],
};

const readData = async () => {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return { ...emptyData, ...JSON.parse(raw) };
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeData(emptyData);
      return { ...emptyData };
    }

    throw error;
  }
};

const writeData = async (data) => {
  await fs.mkdir(__dirname, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
};

const nextId = (items) => {
  const maxId = items.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0);
  return maxId + 1;
};

export const findUserByEmail = async (email) => {
  const data = await readData();
  return data.users.find((user) => user.email.toLowerCase() === email.toLowerCase()) || null;
};

export const findUserByPhone = async (phone) => {
  const data = await readData();
  return data.users.find((user) => user.phone === phone) || null;
};

export const findUserById = async (id) => {
  const data = await readData();
  return data.users.find((user) => Number(user.id) === Number(id)) || null;
};

export const createUser = async ({
  name,
  email,
  phone,
  password,
  verificationChannel,
  verificationCodeHash,
  verificationCodeExpiresAt,
}) => {
  const data = await readData();
  const user = {
    id: nextId(data.users),
    name,
    email,
    phone: phone || "",
    password,
    role: "traveler",
    email_verified: false,
    phone_verified: false,
    verification_channel: verificationChannel || "email",
    verification_code_hash: verificationCodeHash || null,
    verification_code_expires_at: verificationCodeExpiresAt || null,
    created_at: new Date().toISOString(),
  };

  data.users.push(user);
  await writeData(data);
  return user;
};

export const updateUser = async (id, updates) => {
  const data = await readData();
  const index = data.users.findIndex((user) => Number(user.id) === Number(id));

  if (index === -1) {
    return null;
  }

  data.users[index] = {
    ...data.users[index],
    ...updates,
    updated_at: new Date().toISOString(),
  };

  await writeData(data);
  return data.users[index];
};

export const createTripRecord = async (userId, trip) => {
  const data = await readData();
  const record = {
    id: nextId(data.trips),
    user_id: Number(userId),
    title: trip.title,
    description: trip.description || "",
    destination: trip.destination || trip.title,
    start_date: trip.start_date,
    end_date: trip.end_date,
    travelers: Number(trip.travelers) || 1,
    trip_type: trip.trip_type || "Leisure",
    budget: Number(trip.budget) || 0,
    cover_image: trip.cover_image || "",
    created_at: new Date().toISOString(),
  };

  data.trips.push(record);
  await writeData(data);
  return record;
};

export const listTripRecords = async (userId) => {
  const data = await readData();
  return data.trips
    .filter((trip) => Number(trip.user_id) === Number(userId))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
};

export const deleteTripRecord = async (userId, tripId) => {
  const data = await readData();
  const before = data.trips.length;
  data.trips = data.trips.filter(
    (trip) => !(Number(trip.id) === Number(tripId) && Number(trip.user_id) === Number(userId))
  );
  const deleted = before !== data.trips.length;

  if (deleted) {
    const stopIds = data.stops
      .filter((stop) => Number(stop.trip_id) === Number(tripId))
      .map((stop) => Number(stop.id));
    data.stops = data.stops.filter((stop) => Number(stop.trip_id) !== Number(tripId));
    data.activities = data.activities.filter((activity) => !stopIds.includes(Number(activity.stop_id)));
    await writeData(data);
  }

  return deleted;
};

export const addStopRecord = async (stop) => {
  const data = await readData();
  const record = {
    id: nextId(data.stops),
    trip_id: Number(stop.trip_id),
    city_name: stop.city_name,
    country: stop.country || "",
    arrival_date: stop.arrival_date,
    departure_date: stop.departure_date,
    notes: stop.notes || "",
    created_at: new Date().toISOString(),
  };

  data.stops.push(record);
  await writeData(data);
  return record;
};

export const listStopRecords = async (tripId) => {
  const data = await readData();
  return data.stops
    .filter((stop) => Number(stop.trip_id) === Number(tripId))
    .sort((a, b) => new Date(a.arrival_date) - new Date(b.arrival_date));
};

export const addActivityRecord = async (activity) => {
  const data = await readData();
  const record = {
    id: nextId(data.activities),
    stop_id: Number(activity.stop_id),
    activity_name: activity.activity_name,
    activity_type: activity.activity_type || "Experience",
    activity_time: activity.activity_time || "",
    activity_date: activity.activity_date || "",
    location: activity.location || "",
    cost: Number(activity.cost) || 0,
    notes: activity.notes || "",
    created_at: new Date().toISOString(),
  };

  data.activities.push(record);
  await writeData(data);
  return record;
};

export const listActivityRecords = async (stopId) => {
  const data = await readData();
  return data.activities
    .filter((activity) => Number(activity.stop_id) === Number(stopId))
    .sort((a, b) => `${a.activity_date} ${a.activity_time}`.localeCompare(`${b.activity_date} ${b.activity_time}`));
};
