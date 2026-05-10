import db from "../config/db.js";
import bcrypt from "bcryptjs";

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