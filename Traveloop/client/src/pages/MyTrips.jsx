import React from "react";

export default function MyTrips() {
  const trips = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1974&auto=format&fit=crop",
      title: "Maldives Luxury Escape",
      date: "12 Oct - 18 Oct",
      budget: "₹85,000",
      status: "Upcoming",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop",
      title: "Paris Romantic Tour",
      date: "02 Nov - 09 Nov",
      budget: "₹1,20,000",
      status: "Planned",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
      title: "Tokyo Adventure",
      date: "15 Dec - 24 Dec",
      budget: "₹1,75,000",
      status: "Completed",
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop",
      title: "Swiss Alps Journey",
      date: "05 Jan - 12 Jan",
      budget: "₹2,10,000",
      status: "Upcoming",
    },
  ];

  return (
    <>
      <div className="mytrips-page">
        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="logo">
            <div className="logo-icon">◉</div>
            <h2>Traveloop</h2>
          </div>

          <div className="menu">
            <div className="menu-item">Dashboard</div>
            <div className="menu-item active">
              My Trips
            </div>
            <div className="menu-item">Create Trip</div>
            <div className="menu-item">Itinerary</div>
            <div className="menu-item">Budget</div>
            <div className="menu-item">Settings</div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="main-content">
          {/* TOPBAR */}
          <div className="topbar">
            <div>
              <h1>My Trips</h1>
              <p>
                Manage and explore all your travel
                experiences.
              </p>
            </div>

            <button className="create-btn">
              + Create New Trip
            </button>
          </div>

          {/* SEARCH + FILTER */}
          <div className="search-section">
            <input
              type="text"
              placeholder="Search your trips..."
            />

            <select>
              <option>All Trips</option>
              <option>Upcoming</option>
              <option>Completed</option>
              <option>Planned</option>
            </select>
          </div>

          {/* TRIPS GRID */}
          <div className="trips-grid">
            {trips.map((trip) => (
              <div className="trip-card" key={trip.id}>
                <div
                  className="trip-image"
                  style={{
                    backgroundImage: `url(${trip.image})`,
                  }}
                >
                  <div className="overlay"></div>

                  <span className="status">
                    {trip.status}
                  </span>
                </div>

                <div className="trip-content">
                  <h2>{trip.title}</h2>

                  <p className="trip-date">
                    {trip.date}
                  </p>

                  <div className="trip-footer">
                    <div>
                      <span className="label">
                        Budget
                      </span>

                      <h3>{trip.budget}</h3>
                    </div>

                    <button>View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body {
          background: #050816;
        }

        .mytrips-page {
          min-height: 100vh;
          display: flex;
          background: #050816;
          color: white;
        }

        /* SIDEBAR */

        .sidebar {
          width: 260px;
          background: #0b1020;
          border-right: 1px solid rgba(255,255,255,0.08);
          padding: 30px 20px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 50px;
        }

        .logo-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            #57c7ff,
            #8f7cff
          );

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo h2 {
          font-size: 24px;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .menu-item {
          padding: 14px 18px;
          border-radius: 14px;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          transition: 0.3s;
        }

        .menu-item:hover,
        .menu-item.active {
          background: rgba(255,255,255,0.08);
          color: white;
        }

        /* MAIN CONTENT */

        .main-content {
          flex: 1;
          padding: 40px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }

        .topbar h1 {
          font-size: 42px;
          margin-bottom: 8px;
        }

        .topbar p {
          color: rgba(255,255,255,0.6);
        }

        .create-btn {
          height: 54px;
          padding: 0 28px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(
            90deg,
            #57c7ff,
            #8f7cff
          );
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        /* SEARCH SECTION */

        .search-section {
          display: flex;
          gap: 20px;
          margin-bottom: 35px;
        }

        .search-section input,
        .search-section select {
          height: 56px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.05);
          color: white;
          padding: 0 18px;
          outline: none;
        }

        .search-section input {
          flex: 1;
        }

        .search-section select {
          width: 220px;
        }

        /* GRID */

        .trips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .trip-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          overflow: hidden;
          transition: 0.3s;
          backdrop-filter: blur(20px);
        }

        .trip-card:hover {
          transform: translateY(-6px);
        }

        .trip-image {
          height: 240px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.75),
            rgba(0,0,0,0.15)
          );
        }

        .status {
          position: absolute;
          top: 18px;
          right: 18px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          padding: 8px 14px;
          border-radius: 50px;
          font-size: 13px;
          z-index: 2;
        }

        .trip-content {
          padding: 24px;
        }

        .trip-content h2 {
          margin-bottom: 10px;
          font-size: 24px;
        }

        .trip-date {
          color: rgba(255,255,255,0.6);
          margin-bottom: 24px;
        }

        .trip-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .label {
          color: rgba(255,255,255,0.5);
          font-size: 13px;
        }

        .trip-footer h3 {
          margin-top: 5px;
          color: #57c7ff;
        }

        .trip-footer button {
          height: 46px;
          padding: 0 22px;
          border: none;
          border-radius: 12px;
          background: rgba(255,255,255,0.08);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .trip-footer button:hover {
          background: rgba(255,255,255,0.15);
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .sidebar {
            display: none;
          }

          .main-content {
            padding: 20px;
          }
        }

        @media (max-width: 700px) {
          .topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .search-section {
            flex-direction: column;
          }

          .search-section select {
            width: 100%;
          }

          .topbar h1 {
            font-size: 34px;
          }
        }
      `}</style>
    </>
  );
}