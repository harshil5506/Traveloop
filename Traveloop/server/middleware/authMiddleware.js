import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

  const authHeader = req.headers.authorization;

  // CHECK TOKEN
  if (!authHeader) {
    return res.status(401).json({
      message: "No token provided"
    });
  }

  // GET TOKEN
  const token = authHeader.split(" ")[1];

  // VERIFY TOKEN
  jwt.verify(token, process.env.JWT_SECRET || "traveloop-dev-secret", (err, user) => {

    if (err) {
      return res.status(403).json({
        message: "Invalid token"
      });
    }

    req.user = user;

    next();

  });

};
