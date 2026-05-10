import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    // CHECK IF USER EXISTS
    const checkQuery = "SELECT * FROM users WHERE email = ?";

    db.query(checkQuery, [email], async (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      if (result.length > 0) {
        return res.status(400).json({
          message: "User already exists"
        });
      }

      // HASH PASSWORD
      const hashedPassword = await bcrypt.hash(password, 10);

      // INSERT USER
      const insertQuery = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
      `;

      db.query(
        insertQuery,
        [name, email, hashedPassword],
        (err, result) => {

          if (err) {
            return res.status(500).json(err);
          }

          res.status(201).json({
            message: "User registered successfully"
          });

        }
      );

    });

  } catch (error) {

    res.status(500).json(error);

  }
};

export const loginUser = (req, res) => {

  try {

    const { email, password } = req.body;

    // CHECK USER
    const query = "SELECT * FROM users WHERE email = ?";

    db.query(query, [email], async (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "User not found"
        });
      }

      const user = result[0];

      // CHECK PASSWORD
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid credentials"
        });
      }

      // CREATE TOKEN
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
      );

      // REMOVE PASSWORD
      const { password: pwd, ...otherDetails } = user;

      res.status(200).json({
        message: "Login successful",
        token,
        user: otherDetails
      });

    });

  } catch (error) {

    res.status(500).json(error);

  }

};