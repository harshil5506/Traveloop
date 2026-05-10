import { addActivityRecord, listActivityRecords } from "../data/store.js";

export const addActivity = async (req, res) => {
  try {
    const { stop_id, activity_name } = req.body;

    if (!stop_id || !activity_name) {
      return res.status(400).json({
        message: "Stop and activity name are required",
      });
    }

    const activity = await addActivityRecord(req.body);

    res.status(201).json({
      message: "Activity added successfully",
      activity,
    });
  } catch (error) {
    res.status(500).json({ message: "Unable to add activity", error: error.message });
  }
};

export const getActivities = async (req, res) => {
  try {
    const activities = await listActivityRecords(req.params.stopId);
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch activities", error: error.message });
  }
};
