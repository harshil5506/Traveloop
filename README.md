# Traveloop

Traveloop is a full-stack personalized travel planner built with React, Vite, Express, JWT authentication, and MySQL-ready data models. It helps travelers create trips, manage itineraries, track budgets, prepare packing lists, save notes, and share travel plans.

The project is hackathon-friendly: it can run immediately with local JSON storage, and it also includes a complete MySQL schema for a production-style local database setup.

## Features

- User signup and login with JWT authentication
- Optional email OTP or phone SMS OTP verification flow
- Protected frontend routes
- Dashboard with trip stats and quick actions
- Create, list, search, filter, and delete trips
- Itinerary pages for stops and activities
- Budget, packing checklist, shared itinerary, notes, profile, and admin pages
- MySQL schema file included for copy-paste setup
- Development fallback storage when MySQL is not configured

## Tech Stack

**Frontend**

- React
- Vite
- React Router
- CSS-in-JS page styling

**Backend**

- Node.js
- Express
- JWT
- bcryptjs
- MySQL-ready schema
- Local JSON fallback storage for quick demos

## Project Structure

```text
Traveloop/
  client/
    src/
      components/
      context/
      lib/
      pages/
    vite.config.js
    package.json
  server/
    config/
    controllers/
    data/
    middleware/
    routes/
    services/
    database_schema.sql
    .env.example
    package.json
README.md
```

## Quick Start

Open two terminals.

### 1. Start the backend

```bash
cd Traveloop/server
npm install
copy .env.example .env
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

### 2. Start the frontend

```bash
cd Traveloop/client
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## MySQL Setup

The copy-paste MySQL schema is here:

```text
Traveloop/server/database_schema.sql
```

Steps:

1. Open MySQL Workbench, phpMyAdmin, or your MySQL CLI.
2. Copy the full contents of `Traveloop/server/database_schema.sql`.
3. Paste and run it.
4. Create `Traveloop/server/.env` from `.env.example`.
5. Update the database credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=traveloop
JWT_SECRET=change-this-to-a-long-random-secret
```

The current app also supports JSON fallback storage for fast demos. The generated local JSON file is ignored by Git.

## Authentication and Verification

Signup accepts email verification or phone SMS verification.

Supported auth routes:

```text
POST /api/auth/signup
POST /api/auth/register
POST /api/auth/login
POST /api/auth/verify
POST /api/auth/verify-email
POST /api/auth/verify-phone
POST /api/auth/resend-verification
```

Example signup request:

```json
{
  "name": "Jayraj Panchal",
  "email": "jayraj@example.com",
  "phone": "+919876543210",
  "password": "StrongPassword123",
  "verificationChannel": "email"
}
```

Use `"verificationChannel": "sms"` to send the OTP to the phone number instead.

In development, OTP codes are printed in the backend console and returned as `verification.devCode` for easier testing. For production, replace the development sender in:

```text
Traveloop/server/services/verificationService.js
```

with a real provider such as SMTP, SendGrid, Twilio, MSG91, or any SMS gateway.

To require verification before login, set:

```env
REQUIRE_VERIFICATION=true
```

For hackathon demos, keep it false:

```env
REQUIRE_VERIFICATION=false
```

## Main API Routes

Trips:

```text
POST   /api/trips/create
GET    /api/trips
DELETE /api/trips/:id
```

Itinerary stops:

```text
POST /api/itinerary/add-stop
GET  /api/itinerary/:tripId
```

Activities:

```text
POST /api/activities/add
GET  /api/activities/:stopId
```

Protected routes require:

```text
Authorization: Bearer <jwt-token>
```

## Frontend Routes

```text
/                  Login
/signup            Signup
/dashboard         Dashboard
/create-trip       Create Trip
/my-trips          My Trips
/itinerary         Itinerary View
/builder           Itinerary Builder
/city-search       City Search
/activity-search   Activity Search
/budget            Budget Breakdown
/packing           Packing Checklist
/shared            Shared Itinerary
/profile           Profile Settings
/notes             Trip Notes
/admin             Admin Dashboard
```

Aliases such as `/login`, `/trips`, `/settings`, and `/itinerary-builder` redirect to the correct pages.

## Environment Variables

Create `Traveloop/server/.env`:

```env
PORT=5000
JWT_SECRET=change-this-to-a-long-random-secret

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=traveloop

REQUIRE_VERIFICATION=false
VERIFICATION_CODE_TTL_MINUTES=10
NODE_ENV=development
```

## Verification Flow

1. User signs up with email or phone.
2. Server creates a 6-digit OTP.
3. OTP is hashed before storage.
4. Development sender prints the OTP in the console.
5. User submits OTP to `/api/auth/verify`, `/api/auth/verify-email`, or `/api/auth/verify-phone`.
6. Server marks `email_verified` or `phone_verified` as true.

Example verify email:

```json
{
  "channel": "email",
  "email": "jayraj@example.com",
  "code": "123456"
}
```

Example verify phone:

```json
{
  "channel": "sms",
  "phone": "+919876543210",
  "code": "123456"
}
```

## Useful Scripts

Backend:

```bash
npm run dev
npm start
```

Frontend:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Test Checklist

- Create a new account from `/signup`
- Choose Email OTP or Phone SMS OTP
- Confirm the OTP appears in the backend console
- Login from `/`
- Create a trip from `/create-trip`
- Confirm it appears on `/dashboard` and `/my-trips`
- Search/filter trips
- Delete a trip
- Visit itinerary, budget, packing, notes, shared, and profile pages

## Production Notes

Before deploying:

- Use a strong `JWT_SECRET`
- Set `NODE_ENV=production`
- Use MySQL instead of JSON fallback
- Replace console OTP sender with real email/SMS providers
- Enable `REQUIRE_VERIFICATION=true`
- Add HTTPS
- Add rate limiting to auth and verification routes
- Add request validation and server-side logging
- Store secrets only in environment variables

## Status

Traveloop is now suitable for a hackathon demo and structured for continued production hardening.
