import db from "../config/db.js";


// CREATE TRIP
export const createTrip = (req, res) => {

  const userId = req.user.id;

  const {
    title,
    description,
    start_date,
    end_date,
    cover_image
  } = req.body;

  const query = `
    INSERT INTO trips
    (user_id, title, description, start_date, end_date, cover_image)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      userId,
      title,
      description,
      start_date,
      end_date,
      cover_image
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Trip created successfully"
      });

    }
  );

};


// GET ALL TRIPS
export const getTrips = (req, res) => {

  const userId = req.user.id;

  const query = `
    SELECT * FROM trips
    WHERE user_id = ?
    ORDER BY created_at DESC
  `;

  db.query(query, [userId], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);

  });

};


// DELETE TRIP
export const deleteTrip = (req, res) => {

  const tripId = req.params.id;

  const query = `
    DELETE FROM trips
    WHERE id = ?
  `;

  db.query(query, [tripId], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json({
      message: "Trip deleted successfully"
    });

  });

};