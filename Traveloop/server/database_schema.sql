-- Traveloop MySQL Schema
-- Copy-paste this full file into MySQL Workbench, phpMyAdmin, or the mysql CLI.

CREATE DATABASE IF NOT EXISTS traveloop
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE traveloop;

CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(180) NOT NULL,
  phone VARCHAR(25) NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('traveler', 'admin') NOT NULL DEFAULT 'traveler',
  email_verified BOOLEAN NOT NULL DEFAULT FALSE,
  phone_verified BOOLEAN NOT NULL DEFAULT FALSE,
  verification_channel ENUM('email', 'sms') NOT NULL DEFAULT 'email',
  verification_code_hash VARCHAR(255) NULL,
  verification_code_expires_at DATETIME NULL,
  last_login_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_email (email),
  UNIQUE KEY uq_users_phone (phone)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS trips (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  title VARCHAR(180) NOT NULL,
  destination VARCHAR(180) NOT NULL,
  description TEXT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  travelers INT UNSIGNED NOT NULL DEFAULT 1,
  trip_type VARCHAR(60) NOT NULL DEFAULT 'Leisure',
  budget DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  cover_image VARCHAR(700) NULL,
  status ENUM('draft', 'planned', 'upcoming', 'completed', 'cancelled') NOT NULL DEFAULT 'planned',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_trips_user_id (user_id),
  CONSTRAINT fk_trips_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS itinerary_stops (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  trip_id INT UNSIGNED NOT NULL,
  city_name VARCHAR(160) NOT NULL,
  country VARCHAR(120) NULL,
  arrival_date DATE NOT NULL,
  departure_date DATE NOT NULL,
  notes TEXT NULL,
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_stops_trip_id (trip_id),
  CONSTRAINT fk_stops_trip
    FOREIGN KEY (trip_id) REFERENCES trips(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS activities (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  stop_id INT UNSIGNED NOT NULL,
  activity_name VARCHAR(180) NOT NULL,
  activity_type VARCHAR(80) NOT NULL DEFAULT 'Experience',
  activity_date DATE NULL,
  activity_time TIME NULL,
  location VARCHAR(220) NULL,
  cost DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  notes TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_activities_stop_id (stop_id),
  CONSTRAINT fk_activities_stop
    FOREIGN KEY (stop_id) REFERENCES itinerary_stops(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS expenses (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  trip_id INT UNSIGNED NOT NULL,
  category VARCHAR(100) NOT NULL,
  title VARCHAR(180) NOT NULL,
  amount DECIMAL(12,2) NOT NULL,
  currency CHAR(3) NOT NULL DEFAULT 'INR',
  spent_on DATE NULL,
  notes TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_expenses_trip_id (trip_id),
  CONSTRAINT fk_expenses_trip
    FOREIGN KEY (trip_id) REFERENCES trips(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS packing_items (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  trip_id INT UNSIGNED NOT NULL,
  category VARCHAR(100) NOT NULL DEFAULT 'Essentials',
  item_name VARCHAR(180) NOT NULL,
  is_packed BOOLEAN NOT NULL DEFAULT FALSE,
  quantity INT UNSIGNED NOT NULL DEFAULT 1,
  notes TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_packing_trip_id (trip_id),
  CONSTRAINT fk_packing_trip
    FOREIGN KEY (trip_id) REFERENCES trips(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS trip_notes (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  trip_id INT UNSIGNED NOT NULL,
  title VARCHAR(180) NOT NULL,
  body TEXT NOT NULL,
  note_date DATE NULL,
  is_favorite BOOLEAN NOT NULL DEFAULT FALSE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_notes_trip_id (trip_id),
  CONSTRAINT fk_notes_trip
    FOREIGN KEY (trip_id) REFERENCES trips(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS shared_itineraries (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  trip_id INT UNSIGNED NOT NULL,
  shared_by_user_id INT UNSIGNED NOT NULL,
  share_token VARCHAR(120) NOT NULL,
  recipient_email VARCHAR(180) NULL,
  can_edit BOOLEAN NOT NULL DEFAULT FALSE,
  expires_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_share_token (share_token),
  KEY idx_shared_trip_id (trip_id),
  CONSTRAINT fk_shared_trip
    FOREIGN KEY (trip_id) REFERENCES trips(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_shared_user
    FOREIGN KEY (shared_by_user_id) REFERENCES users(id)
    ON DELETE CASCADE
) ENGINE=InnoDB;

-- Optional starter admin user.
-- Password is not included here for safety. Create users through the signup API.
