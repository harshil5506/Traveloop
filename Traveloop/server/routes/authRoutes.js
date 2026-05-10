import express from "express";

import {
  registerUser,
  loginUser
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/register", registerUser); // Support both endpoints

router.post("/login", loginUser);

export default router;