import {
  createTripRecord,
  deleteTripRecord,
  listTripRecords,
} from "../data/store.js";

export const createTrip = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, destination, start_date, end_date } = req.body;

    if (!title || !destination || !start_date || !end_date) {
      return res.status(400).json({
        message: "Title, destination, start date, and end date are required",
      });
    }

    const trip = await createTripRecord(userId, req.body);

    res.status(201).json({
      message: "Trip created successfully",
      trip,
    });
  } catch (error) {
    res.status(500).json({ message: "Unable to create trip", error: error.message });
  }
};

export const getTrips = async (req, res) => {
  try {
    const trips = await listTripRecords(req.user.id);
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch trips", error: error.message });
  }
};

export const deleteTrip = async (req, res) => {
  try {
    const deleted = await deleteTripRecord(req.user.id, req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.status(200).json({
      message: "Trip deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Unable to delete trip", error: error.message });
  }
};
