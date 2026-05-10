const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getToken = () => localStorage.getItem("authToken");

export const request = async (path, options = {}) => {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  const token = getToken();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};

export const createTrip = (payload) => {
  return request("/trips/create", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const getTrips = () => request("/trips");

export const deleteTrip = (id) => {
  return request(`/trips/${id}`, {
    method: "DELETE",
  });
};
