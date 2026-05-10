import bcrypt from "bcryptjs";

const CODE_TTL_MINUTES = Number(process.env.VERIFICATION_CODE_TTL_MINUTES || 10);

export const createVerificationCode = async () => {
  const code = String(Math.floor(100000 + Math.random() * 900000));
  const hash = await bcrypt.hash(code, 10);
  const expiresAt = new Date(Date.now() + CODE_TTL_MINUTES * 60 * 1000).toISOString();

  return { code, hash, expiresAt };
};

export const isVerificationCodeValid = async (plainCode, hash, expiresAt) => {
  if (!plainCode || !hash || !expiresAt) {
    return false;
  }

  if (new Date(expiresAt).getTime() < Date.now()) {
    return false;
  }

  return bcrypt.compare(plainCode, hash);
};

export const sendVerificationCode = async ({ channel, email, phone, code }) => {
  const destination = channel === "sms" ? phone : email;

  if (!destination) {
    throw new Error(`${channel === "sms" ? "Phone number" : "Email"} is required for verification`);
  }

  // Development sender: replace this block with SMTP, SendGrid, Twilio, MSG91, etc.
  console.log(`[Traveloop verification] ${channel.toUpperCase()} OTP for ${destination}: ${code}`);

  return {
    provider: "console",
    destination,
    code,
  };
};
