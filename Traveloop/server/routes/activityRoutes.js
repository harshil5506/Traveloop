import express from "express";

import {
  addActivity,
  getActivities
} from "../controllers/activityController.js";

import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", verifyToken, addActivity);

router.get("/:stopId", verifyToken, getActivities);

export default router;