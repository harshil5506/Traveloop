import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const hasDatabaseConfig = Boolean(
  process.env.DB_HOST &&
  process.env.DB_USER &&
  process.env.DB_NAME
);

const db = hasDatabaseConfig
  ? mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })
  : null;

if (db) {
  db.connect((err) => {
    if (err) {
      console.log("Database connection failed. JSON storage remains available.");
      console.log(err.message);
    } else {
      console.log("MySQL connected");
    }
  });
} else {
  console.log("No MySQL config found. Using local JSON storage.");
}

export default db;
