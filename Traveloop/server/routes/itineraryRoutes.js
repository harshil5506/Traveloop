import express from "express";

import {
  addStop,
  getStops
} from "../controllers/itineraryController.js";

import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add-stop", verifyToken, addStop);

router.get("/:tripId", verifyToken, getStops);

export default router;