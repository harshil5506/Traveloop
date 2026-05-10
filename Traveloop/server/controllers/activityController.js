import db from "../config/db.js";


// ADD ACTIVITY
export const addActivity = (req, res) => {

  const {
    stop_id,
    activity_name,
    activity_type,
    activity_time,
    activity_date,
    location,
    cost,
    notes
  } = req.body;

  const query = `
    INSERT INTO activities
    (
      stop_id,
      activity_name,
      activity_type,
      activity_time,
      activity_date,
      location,
      cost,
      notes
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      stop_id,
      activity_name,
      activity_type,
      activity_time,
      activity_date,
      location,
      cost,
      notes
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Activity added successfully"
      });

    }
  );

};


// GET ACTIVITIES OF STOP
export const getActivities = (req, res) => {

  const stopId = req.params.stopId;

  const query = `
    SELECT * FROM activities
    WHERE stop_id = ?
    ORDER BY activity_date ASC
  `;

  db.query(query, [stopId], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(result);

  });

};