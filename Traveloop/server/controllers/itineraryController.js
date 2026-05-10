import db from "../config/db.js";


// ADD STOP
export const addStop = (req, res) => {

  const {
    trip_id,
    city_name,
    country,
    arrival_date,
    departure_date,
    notes
  } = req.body;

  const query = `
    INSERT INTO itinerary_stops
    (trip_id, city_name, country, arrival_date, departure_date, notes)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      trip_id,
      city_name,
      country,
      arrival_date,
      departure_date,
      notes
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Stop added successfully"
      });

    }
  );

};


// GET ALL STOPS OF A TRIP
export const getStops = (req, res) => {

  const tripId = req.params.tripId;

  const query = `
    SELECT * FROM itinerary_stops
    WHERE trip_id = ?
    ORDER BY arrival_date ASC
  `;

  db.query(query, [tripId], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);

  });

};