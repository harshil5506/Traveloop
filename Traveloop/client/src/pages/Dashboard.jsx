import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const upcomingTrips = [
        {
            id: 1,
            title: "Maldives Luxury Escape",
            date: "12 Oct - 18 Oct 2026",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1974&auto=format&fit=crop",
            status: "Upcoming",
        },
        {
            id: 2,
            title: "Paris Romantic Tour",
            date: "02 Nov - 09 Nov 2026",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1974&auto=format&fit=crop",
            status: "Planned",
        },
        {
            id: 3,
            title: "Tokyo Adventure",
            date: "15 Dec - 24 Dec 2026",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop",
            status: "Planned",
        },
    ];

    const stats = [
        { label: "Total Trips", value: "3", icon: "✈️" },
        { label: "Days Traveled", value: "32", icon: "📅" },
        { label: "Destinations", value: "8", icon: "🌍" },
        { label: "Total Budget", value: "₹4,15,000", icon: "💰" },
    ];

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <>
            <div className="dashboard-page">
                {/* SIDEBAR */}
                <div className="sidebar">
                    <div className="logo">
                        <div className="logo-icon">◉</div>
                        <h2>Traveloop</h2>
                    </div>

                    <div className="menu">
                        <div className="menu-item active">Dashboard</div>
                        <div
                            className="menu-item"
                            onClick={() => navigate("/my-trips")}
                        >
                            My Trips
                        </div>
                        <div
                            className="menu-item"
                            onClick={() => navigate("/create-trip")}
                        >
                            Create Trip
                        </div>
                        <div
                            className="menu-item"
                            onClick={() => navigate("/city-search")}
                        >
                            Explore Destinations
                        </div>
                        <div
                            className="menu-item"
                            onClick={() => navigate("/profile")}
                        >
                            Profile Settings
                        </div>
                    </div>

                    <div className="sidebar-footer">
                        <button className="logout-btn" onClick={handleLogout}>
                            🚪 Logout
                        </button>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="main-content">
                    {/* TOPBAR */}
                    <div className="topbar">
                        <div className="greeting">
                            <h1>Welcome Back, {user?.name || "Traveler"}! 👋</h1>
                            <p>Plan your next luxury journey with AI assistance</p>
                        </div>

                        <button
                            className="create-trip-btn"
                            onClick={() => navigate("/create-trip")}
                        >
                            + Create New Trip
                        </button>
                    </div>

                    {/* STATS GRID */}
                    <div className="stats-grid">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-content">
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* QUICK ACTIONS */}
                    <div className="quick-actions">
                        <h2>Quick Actions</h2>
                        <div className="action-grid">
                            <div
                                className="action-card"
                                onClick={() => navigate("/create-trip")}
                            >
                                <span className="action-icon">🎯</span>
                                <h3>Plan New Trip</h3>
                                <p>Create itinerary</p>
                            </div>

                            <div
                                className="action-card"
                                onClick={() => navigate("/city-search")}
                            >
                                <span className="action-icon">🔍</span>
                                <h3>Search Cities</h3>
                                <p>Find destinations</p>
                            </div>

                            <div
                                className="action-card"
                                onClick={() => navigate("/activity-search")}
                            >
                                <span className="action-icon">🎪</span>
                                <h3>Activities</h3>
                                <p>Discover experiences</p>
                            </div>

                            <div
                                className="action-card"
                                onClick={() => navigate("/budget")}
                            >
                                <span className="action-icon">💳</span>
                                <h3>Budget Planner</h3>
                                <p>Manage expenses</p>
                            </div>
                        </div>
                    </div>

                    {/* UPCOMING TRIPS */}
                    <div className="upcoming-section">
                        <div className="section-header">
                            <h2>Upcoming Trips</h2>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/my-trips");
                                }}
                                className="view-all"
                            >
                                View All →
                            </a>
                        </div>

                        <div className="trips-grid">
                            {upcomingTrips.map((trip) => (
                                <div key={trip.id} className="trip-card">
                                    <div className="trip-image">
                                        <img src={trip.image} alt={trip.title} />
                                        <div className="trip-status">{trip.status}</div>
                                    </div>
                                    <div className="trip-info">
                                        <h3>{trip.title}</h3>
                                        <p>📅 {trip.date}</p>
                                        <button className="view-btn">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TIPS SECTION */}
                    <div className="tips-section">
                        <h2>💡 Travel Tips</h2>
                        <div className="tips-grid">
                            <div className="tip-card">
                                <h4>Pack Smart</h4>
                                <p>Use our packing checklist to ensure you don't forget anything important.</p>
                            </div>
                            <div className="tip-card">
                                <h4>Budget Planning</h4>
                                <p>Break down your expenses and track spending with our smart budget tools.</p>
                            </div>
                            <div className="tip-card">
                                <h4>Share Your Plans</h4>
                                <p>Invite friends to your trips and collaborate on itinerary planning.</p>
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
          font-family: Poppins, sans-serif;
        }

        body {
          background: #050816;
          color: white;
        }

        .dashboard-page {
          width: 100%;
          min-height: 100vh;
          display: flex;
          background: linear-gradient(135deg, #050816 0%, #0a0f2c 100%);
        }

        /* SIDEBAR */
        .sidebar {
          width: 280px;
          background: rgba(10, 15, 44, 0.6);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          backdrop-filter: blur(20px);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 50px;
          padding: 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #57c7ff, #8f7cff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .logo h2 {
          font-size: 20px;
          font-weight: 700;
        }

        .menu {
          flex: 1;
        }

        .menu-item {
          padding: 14px 16px;
          margin-bottom: 8px;
          border-radius: 10px;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s;
          font-weight: 500;
        }

        .menu-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }

        .menu-item.active {
          background: linear-gradient(135deg, #57c7ff, #8f7cff);
          color: white;
        }

        .sidebar-footer {
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .logout-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 10px;
          background: rgba(255, 67, 54, 0.1);
          color: #ff4336;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }

        .logout-btn:hover {
          background: rgba(255, 67, 54, 0.2);
        }

        /* MAIN CONTENT */
        .main-content {
          flex: 1;
          overflow-y: auto;
          padding: 40px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
        }

        .greeting h1 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .greeting p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 16px;
        }

        .create-trip-btn {
          padding: 14px 28px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #57c7ff, #8f7cff);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .create-trip-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(87, 199, 255, 0.3);
        }

        /* STATS GRID */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 50px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          backdrop-filter: blur(20px);
          transition: all 0.3s;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(87, 199, 255, 0.3);
        }

        .stat-icon {
          font-size: 32px;
        }

        .stat-content h3 {
          font-size: 28px;
          margin-bottom: 4px;
        }

        .stat-content p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
        }

        /* QUICK ACTIONS */
        .quick-actions {
          margin-bottom: 50px;
        }

        .quick-actions h2 {
          font-size: 24px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .action-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }

        .action-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 24px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s;
          backdrop-filter: blur(20px);
        }

        .action-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(87, 199, 255, 0.3);
          transform: translateY(-4px);
        }

        .action-icon {
          font-size: 32px;
          display: block;
          margin-bottom: 12px;
        }

        .action-card h3 {
          font-size: 16px;
          margin-bottom: 4px;
        }

        .action-card p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 13px;
        }

        /* UPCOMING TRIPS */
        .upcoming-section {
          margin-bottom: 50px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .section-header h2 {
          font-size: 24px;
          font-weight: 700;
        }

        .view-all {
          color: #57c7ff;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }

        .view-all:hover {
          color: #66d9ff;
        }

        .trips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 24px;
        }

        .trip-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.3s;
          cursor: pointer;
        }

        .trip-card:hover {
          border-color: rgba(87, 199, 255, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(87, 199, 255, 0.1);
        }

        .trip-image {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
        }

        .trip-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .trip-status {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(87, 199, 255, 0.8);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .trip-info {
          padding: 20px;
        }

        .trip-info h3 {
          font-size: 16px;
          margin-bottom: 8px;
        }

        .trip-info p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          margin-bottom: 16px;
        }

        .view-btn {
          width: 100%;
          padding: 10px;
          border: 1px solid rgba(87, 199, 255, 0.3);
          background: transparent;
          color: #57c7ff;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }

        .view-btn:hover {
          background: rgba(87, 199, 255, 0.1);
        }

        /* TIPS SECTION */
        .tips-section {
          margin-bottom: 50px;
        }

        .tips-section h2 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .tip-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 24px;
          backdrop-filter: blur(20px);
        }

        .tip-card h4 {
          font-size: 16px;
          margin-bottom: 10px;
          color: #57c7ff;
        }

        .tip-card p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          line-height: 1.6;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .dashboard-page {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            height: auto;
            position: relative;
            padding: 20px;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .menu {
            display: flex;
            gap: 10px;
          }

          .menu-item {
            margin-bottom: 0;
            white-space: nowrap;
          }

          .sidebar-footer {
            border-top: none;
          }

          .main-content {
            padding: 30px;
          }

          .topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .trips-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .greeting h1 {
            font-size: 28px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .action-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .trips-grid {
            grid-template-columns: 1fr;
          }

          .main-content {
            padding: 20px;
          }
        }
      `}</style>
        </>
    );
}