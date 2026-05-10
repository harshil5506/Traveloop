import React from "react";

export default function ItineraryBuilder() {
    const itineraryDays = [
        {
            day: "Day 1",
            title: "Arrival & Beach Exploration",
            activities: [
                "Airport Pickup & Hotel Check-in",
                "Lunch at Ocean View Restaurant",
                "Sunset Beach Walk",
            ],
        },

        {
            day: "Day 2",
            title: "Adventure Activities",
            activities: [
                "Scuba Diving Session",
                "Island Hopping Tour",
                "Night Market Visit",
            ],
        },

        {
            day: "Day 3",
            title: "Luxury Relaxation",
            activities: [
                "Spa & Wellness Session",
                "Private Yacht Dinner",
                "Photography Tour",
            ],
        },
    ];

    return (
        <>
            <div className="builder-page">
                {/* SIDEBAR */}
                <div className="sidebar">
                    <div className="logo">
                        <div className="logo-icon">◉</div>
                        <h2>Traveloop</h2>
                    </div>

                    <div className="menu">
                        <div className="menu-item">Dashboard</div>
                        <div className="menu-item">My Trips</div>
                        <div className="menu-item active">
                            Itinerary Builder
                        </div>
                        <div className="menu-item">Budget</div>
                        <div className="menu-item">Settings</div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="main-content">
                    {/* TOPBAR */}
                    <div className="topbar">
                        <div>
                            <h1>Itinerary Builder</h1>

                            <p>
                                Plan your complete travel experience
                                day by day.
                            </p>
                        </div>

                        <button className="publish-btn">
                            Publish Itinerary
                        </button>
                    </div>

                    {/* MAIN GRID */}
                    <div className="content-grid">
                        {/* LEFT SIDE */}
                        <div className="left-panel">
                            {/* TRIP INFO */}
                            <div className="trip-card">
                                <h2>Maldives Luxury Escape</h2>

                                <div className="trip-info">
                                    <div>
                                        <span>Destination</span>
                                        <h3>Maldives</h3>
                                    </div>

                                    <div>
                                        <span>Duration</span>
                                        <h3>7 Days</h3>
                                    </div>

                                    <div>
                                        <span>Travelers</span>
                                        <h3>2 Adults</h3>
                                    </div>
                                </div>
                            </div>

                            {/* DAYS */}
                            {itineraryDays.map((item, index) => (
                                <div className="day-card" key={index}>
                                    <div className="day-header">
                                        <div>
                                            <span>{item.day}</span>

                                            <h2>{item.title}</h2>
                                        </div>

                                        <button>+ Add Activity</button>
                                    </div>

                                    <div className="activities">
                                        {item.activities.map(
                                            (activity, idx) => (
                                                <div
                                                    className="activity-card"
                                                    key={idx}
                                                >
                                                    <div className="activity-left">
                                                        <div className="dot"></div>

                                                        <p>{activity}</p>
                                                    </div>

                                                    <div className="actions">
                                                        <span>✏️</span>
                                                        <span>🗑️</span>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="right-panel">
                            <div className="ai-box">
                                <h2>AI Suggestions</h2>

                                <div className="suggestion-card">
                                    <h3>Recommended Activity</h3>

                                    <p>
                                        Add a sunset yacht dinner on Day
                                        2 for a premium luxury experience.
                                    </p>
                                </div>

                                <div className="suggestion-card">
                                    <h3>Travel Optimization</h3>

                                    <p>
                                        Group nearby attractions together
                                        to reduce transportation time.
                                    </p>
                                </div>

                                <div className="suggestion-card">
                                    <h3>Budget Advice</h3>

                                    <p>
                                        Booking water activities early
                                        can save up to 20% of costs.
                                    </p>
                                </div>
                            </div>

                            <div className="summary-box">
                                <h2>Trip Summary</h2>

                                <div className="summary-item">
                                    <span>Total Days</span>
                                    <h3>7</h3>
                                </div>

                                <div className="summary-item">
                                    <span>Total Activities</span>
                                    <h3>18</h3>
                                </div>

                                <div className="summary-item">
                                    <span>Estimated Cost</span>
                                    <h3>₹85,000</h3>
                                </div>
                            </div>
                        </div>
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

        .builder-page {
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

        .publish-btn {
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

        /* GRID */

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 28px;
        }

        /* LEFT */

        .trip-card,
        .day-card,
        .ai-box,
        .summary-box {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 28px;
          backdrop-filter: blur(20px);
        }

        .trip-card {
          margin-bottom: 28px;
        }

        .trip-card h2 {
          margin-bottom: 25px;
          font-size: 28px;
        }

        .trip-info {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .trip-info span {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
        }

        .trip-info h3 {
          margin-top: 8px;
          color: #57c7ff;
        }

        .day-card {
          margin-bottom: 24px;
        }

        .day-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .day-header span {
          color: #57c7ff;
          font-size: 14px;
        }

        .day-header h2 {
          margin-top: 6px;
        }

        .day-header button {
          height: 46px;
          padding: 0 18px;
          border: none;
          border-radius: 12px;
          background: rgba(255,255,255,0.08);
          color: white;
          cursor: pointer;
        }

        .activities {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .activity-card {
          background: rgba(255,255,255,0.04);
          border-radius: 16px;
          padding: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .activity-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #57c7ff;
        }

        .activity-left p {
          color: rgba(255,255,255,0.8);
        }

        .actions {
          display: flex;
          gap: 12px;
          cursor: pointer;
        }

        /* RIGHT */

        .right-panel {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .ai-box h2,
        .summary-box h2 {
          margin-bottom: 24px;
        }

        .suggestion-card {
          background: rgba(255,255,255,0.04);
          border-radius: 18px;
          padding: 20px;
          margin-bottom: 18px;
        }

        .suggestion-card h3 {
          margin-bottom: 12px;
          color: #66d9ff;
        }

        .suggestion-card p {
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          font-size: 14px;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .summary-item span {
          color: rgba(255,255,255,0.6);
        }

        .summary-item h3 {
          color: #57c7ff;
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }

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

          .trip-info {
            flex-direction: column;
          }

          .day-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }

          .topbar h1 {
            font-size: 34px;
          }
        }
      `}</style>
        </>
    );
}