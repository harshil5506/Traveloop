
export default function ItineraryView() {
    const timeline = [
        {
            day: "Day 1",
            title: "Arrival & Relaxation",
            activities: [
                "Airport Pickup",
                "Hotel Check-in",
                "Sunset Beach Dinner",
            ],
        },

        {
            day: "Day 2",
            title: "Adventure & Exploration",
            activities: [
                "Scuba Diving",
                "Island Hopping",
                "Night Market Visit",
            ],
        },

        {
            day: "Day 3",
            title: "Luxury Experience",
            activities: [
                "Spa Session",
                "Private Yacht Ride",
                "Photography Tour",
            ],
        },
    ];

    return (
        <>
            <div className="itinerary-page">
                {/* SIDEBAR */}
                <div className="sidebar">
                    <div className="logo">
                        <div className="logo-icon">◉</div>
                        <h2>Traveloop</h2>
                    </div>

                    <div className="menu">
                        <div className="menu-item">
                            Dashboard
                        </div>

                        <div className="menu-item">
                            My Trips
                        </div>

                        <div className="menu-item active">
                            Itinerary View
                        </div>

                        <div className="menu-item">
                            Budget
                        </div>

                        <div className="menu-item">
                            Settings
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="main-content">
                    {/* TOPBAR */}
                    <div className="topbar">
                        <div>
                            <h1>Trip Itinerary</h1>

                            <p>
                                Complete schedule for your Maldives
                                luxury journey.
                            </p>
                        </div>

                        <div className="top-buttons">
                            <button className="share-btn">
                                Share
                            </button>

                            <button className="download-btn">
                                Download PDF
                            </button>
                        </div>
                    </div>

                    {/* HERO CARD */}
                    <div className="hero-card">
                        <div className="overlay"></div>

                        <div className="hero-content">
                            <span>Luxury Escape</span>

                            <h2>Maldives Adventure</h2>

                            <p>
                                7 Days • 2 Travelers • Premium Resort
                            </p>
                        </div>
                    </div>

                    {/* CONTENT GRID */}
                    <div className="content-grid">
                        {/* TIMELINE */}
                        <div className="timeline-section">
                            {timeline.map((item, index) => (
                                <div className="timeline-card" key={index}>
                                    <div className="timeline-left">
                                        <div className="circle"></div>

                                        <div className="line"></div>
                                    </div>

                                    <div className="timeline-content">
                                        <span>{item.day}</span>

                                        <h2>{item.title}</h2>

                                        <div className="activities">
                                            {item.activities.map(
                                                (activity, idx) => (
                                                    <div
                                                        className="activity"
                                                        key={idx}
                                                    >
                                                        {activity}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="right-panel">
                            {/* TRIP SUMMARY */}
                            <div className="summary-box">
                                <h2>Trip Summary</h2>

                                <div className="summary-item">
                                    <span>Destination</span>
                                    <h3>Maldives</h3>
                                </div>

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

                            {/* NOTES */}
                            <div className="notes-box">
                                <h2>Travel Notes</h2>

                                <p>
                                    Carry sunscreen, lightweight clothes,
                                    and waterproof gear for island
                                    activities. Keep passport and travel
                                    documents secure.
                                </p>
                            </div>

                            {/* WEATHER */}
                            <div className="weather-box">
                                <h2>Weather Forecast</h2>

                                <div className="weather-item">
                                    <span>Temperature</span>
                                    <h3>29°C</h3>
                                </div>

                                <div className="weather-item">
                                    <span>Condition</span>
                                    <h3>Sunny</h3>
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

        .itinerary-page {
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

        /* MAIN */

        .main-content {
          flex: 1;
          padding: 40px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .topbar h1 {
          font-size: 42px;
          margin-bottom: 8px;
        }

        .topbar p {
          color: rgba(255,255,255,0.6);
        }

        .top-buttons {
          display: flex;
          gap: 16px;
        }

        .share-btn,
        .download-btn {
          height: 52px;
          padding: 0 24px;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          color: white;
          font-weight: 600;
        }

        .share-btn {
          background: rgba(255,255,255,0.08);
        }

        .download-btn {
          background: linear-gradient(
            90deg,
            #57c7ff,
            #8f7cff
          );
        }

        /* HERO */

        .hero-card {
          height: 280px;
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          margin-bottom: 35px;

          background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1974&auto=format&fit=crop");

          background-size: cover;
          background-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            to top,
            rgba(0,0,0,0.85),
            rgba(0,0,0,0.2)
          );
        }

        .hero-content {
          position: absolute;
          bottom: 35px;
          left: 35px;
          z-index: 2;
        }

        .hero-content span {
          color: #66d9ff;
          font-size: 14px;
        }

        .hero-content h2 {
          font-size: 42px;
          margin: 10px 0;
        }

        .hero-content p {
          color: rgba(255,255,255,0.7);
        }

        /* GRID */

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }

        /* TIMELINE */

        .timeline-section {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .timeline-card {
          display: flex;
          gap: 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 28px;
          backdrop-filter: blur(20px);
        }

        .timeline-left {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .circle {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #57c7ff;
        }

        .line {
          width: 2px;
          flex: 1;
          background: rgba(255,255,255,0.1);
          margin-top: 10px;
        }

        .timeline-content span {
          color: #57c7ff;
          font-size: 14px;
        }

        .timeline-content h2 {
          margin: 10px 0 20px;
        }

        .activities {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .activity {
          background: rgba(255,255,255,0.05);
          padding: 16px;
          border-radius: 14px;
          color: rgba(255,255,255,0.8);
        }

        /* RIGHT PANEL */

        .right-panel {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .summary-box,
        .notes-box,
        .weather-box {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 28px;
          backdrop-filter: blur(20px);
        }

        .summary-box h2,
        .notes-box h2,
        .weather-box h2 {
          margin-bottom: 24px;
        }

        .summary-item,
        .weather-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .summary-item span,
        .weather-item span {
          color: rgba(255,255,255,0.6);
        }

        .summary-item h3,
        .weather-item h3 {
          color: #57c7ff;
        }

        .notes-box p {
          color: rgba(255,255,255,0.65);
          line-height: 1.8;
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

          .top-buttons {
            width: 100%;
            flex-direction: column;
          }

          .hero-content h2 {
            font-size: 30px;
          }

          .topbar h1 {
            font-size: 34px;
          }
        }
      `}</style>
        </>
    );
}