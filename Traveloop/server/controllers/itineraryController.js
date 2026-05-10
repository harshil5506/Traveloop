import { addStopRecord, listStopRecords } from "../data/store.js";

export const addStop = async (req, res) => {
  try {
    const { trip_id, city_name, arrival_date, departure_date } = req.body;

    if (!trip_id || !city_name || !arrival_date || !departure_date) {
      return res.status(400).json({
        message: "Trip, city, arrival date, and departure date are required",
      });
    }

    const stop = await addStopRecord(req.body);

    res.status(201).json({
      message: "Stop added successfully",
      stop,
    });
  } catch (error) {
    res.status(500).json({ message: "Unable to add stop", error: error.message });
  }
};

export const getStops = async (req, res) => {
  try {
    const stops = await listStopRecords(req.params.tripId);
    res.status(200).json(stops);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch stops", error: error.message });
  }
};
