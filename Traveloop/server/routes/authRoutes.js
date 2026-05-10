import express from "express";

import {
  registerUser,
  loginUser,
  verifyAccount,
  resendVerification
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/register", registerUser); // Support both endpoints

router.post("/login", loginUser);
router.post("/verify", verifyAccount);
router.post("/verify-email", verifyAccount);
router.post("/verify-phone", (req, res, next) => {
  req.body.channel = "sms";
  next();
}, verifyAccount);
router.post("/resend-verification", resendVerification);

export default router;
