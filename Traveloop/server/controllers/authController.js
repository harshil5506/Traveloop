import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  createUser,
  findUserByEmail,
  findUserByPhone,
  updateUser,
} from "../data/store.js";
import {
  createVerificationCode,
  isVerificationCodeValid,
  sendVerificationCode,
} from "../services/verificationService.js";

const signToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET || "traveloop-dev-secret",
    {
      expiresIn: "7d",
    }
  );
};

const sanitizeUser = (user) => {
  const {
    password,
    verification_code_hash,
    verification_code_expires_at,
    ...safeUser
  } = user;
  return safeUser;
};

const normalizePhone = (phone = "") => {
  return phone.replace(/[^\d+]/g, "");
};

const getVerificationFlags = (channel) => {
  if (channel === "sms") {
    return { phone_verified: true };
  }

  return { email_verified: true };
};

export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      verificationChannel = "email",
    } = req.body;
    const channel = verificationChannel === "sms" ? "sms" : "email";
    const normalizedPhone = normalizePhone(phone);

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    if (channel === "sms" && !normalizedPhone) {
      return res.status(400).json({ message: "Phone number is required for SMS verification" });
    }

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (normalizedPhone) {
      const existingPhone = await findUserByPhone(normalizedPhone);

      if (existingPhone) {
        return res.status(400).json({ message: "Phone number already exists" });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verification = await createVerificationCode();
    const user = await createUser({
      name,
      email,
      phone: normalizedPhone,
      password: hashedPassword,
      verificationChannel: channel,
      verificationCodeHash: verification.hash,
      verificationCodeExpiresAt: verification.expiresAt,
    });
    const delivery = await sendVerificationCode({
      channel,
      email,
      phone: normalizedPhone,
      code: verification.code,
    });
    const token = signToken(user);

    res.status(201).json({
      message: `User registered successfully. Verification code sent by ${channel}.`,
      token,
      user: sanitizeUser(user),
      verification: {
        channel,
        destination: delivery.destination,
        expiresAt: verification.expiresAt,
        devCode: process.env.NODE_ENV === "production" ? undefined : verification.code,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Unable to register user", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (
      process.env.REQUIRE_VERIFICATION === "true" &&
      !user.email_verified &&
      !user.phone_verified
    ) {
      return res.status(403).json({ message: "Please verify your email or phone before logging in" });
    }

    const token = signToken(user);

    res.status(200).json({
      message: "Login successful",
      token,
      user: sanitizeUser(user),
    });
  } catch (error) {
    res.status(500).json({ message: "Unable to login", error: error.message });
  }
};

export const verifyAccount = async (req, res) => {
  try {
    const { email, phone, code, channel = "email" } = req.body;
    const normalizedPhone = normalizePhone(phone);
    const user = channel === "sms"
      ? await findUserByPhone(normalizedPhone)
      : await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const valid = await isVerificationCodeValid(
      code,
      user.verification_code_hash,
      user.verification_code_expires_at
    );

    if (!valid) {
      return res.status(400).json({ message: "Invalid or expired verification code" });
    }

    const updatedUser = await updateUser(user.id, {
      ...getVerificationFlags(channel),
      verification_code_hash: null,
      verification_code_expires_at: null,
    });

    res.status(200).json({
      message: "Account verified successfully",
      user: sanitizeUser(updatedUser),
    });
  } catch (error) {
    res.status(500).json({ message: "Unable to verify account", error: error.message });
  }
};

export const resendVerification = async (req, res) => {
  try {
    const { email, phone, channel = "email" } = req.body;
    const normalizedPhone = normalizePhone(phone);
    const user = channel === "sms"
      ? await findUserByPhone(normalizedPhone)
      : await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const verification = await createVerificationCode();
    await updateUser(user.id, {
      verification_channel: channel,
      verification_code_hash: verification.hash,
      verification_code_expires_at: verification.expiresAt,
    });
    const delivery = await sendVerificationCode({
      channel,
      email: user.email,
      phone: user.phone,
      code: verification.code,
    });

    res.status(200).json({
      message: `Verification code sent by ${channel}`,
      verification: {
        channel,
        destination: delivery.destination,
        expiresAt: verification.expiresAt,
        devCode: process.env.NODE_ENV === "production" ? undefined : verification.code,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Unable to resend verification", error: error.message });
  }
};
