import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getTrips } from "../lib/api";

const fallbackImages = [
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop",
];

const formatDateRange = (trip) => {
  if (!trip.start_date || !trip.end_date) return "Dates not set";
  const formatter = new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  return `${formatter.format(new Date(trip.start_date))} - ${formatter.format(new Date(trip.end_date))}`;
};

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getTrips()
      .then(setTrips)
      .catch((err) => setError(err.message || "Unable to load trips"));
  }, []);

  const stats = useMemo(() => {
    const totalBudget = trips.reduce((sum, trip) => sum + Number(trip.budget || 0), 0);
    const destinations = new Set(trips.map((trip) => trip.destination || trip.title)).size;
    const days = trips.reduce((sum, trip) => {
      if (!trip.start_date || !trip.end_date) return sum;
      const diff = Math.max(1, Math.ceil((new Date(trip.end_date) - new Date(trip.start_date)) / 86400000) + 1);
      return sum + diff;
    }, 0);

    return [
      { label: "Total Trips", value: trips.length },
      { label: "Days Planned", value: days },
      { label: "Destinations", value: destinations },
      { label: "Total Budget", value: `₹${totalBudget.toLocaleString("en-IN")}` },
    ];
  }, [trips]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const upcomingTrips = trips.slice(0, 3);

  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">◎</div>
          <h2>Traveloop</h2>
        </div>

        <div className="menu">
          <div className="menu-item active">Dashboard</div>
          <div className="menu-item" onClick={() => navigate("/my-trips")}>My Trips</div>
          <div className="menu-item" onClick={() => navigate("/create-trip")}>Create Trip</div>
          <div className="menu-item" onClick={() => navigate("/city-search")}>Explore Destinations</div>
          <div className="menu-item" onClick={() => navigate("/profile")}>Profile Settings</div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <div className="greeting">
            <h1>Welcome Back, {user?.name || "Traveler"}!</h1>
            <p>Plan, track, and revisit your travel ideas from one dashboard.</p>
          </div>

          <button className="create-trip-btn" onClick={() => navigate("/create-trip")}>
            + Create New Trip
          </button>
        </div>

        {error && <div className="state-card">{error}</div>}

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-grid">
            <button className="action-card" onClick={() => navigate("/create-trip")}>
              <h3>Plan New Trip</h3>
              <p>Create itinerary</p>
            </button>
            <button className="action-card" onClick={() => navigate("/city-search")}>
              <h3>Search Cities</h3>
              <p>Find destinations</p>
            </button>
            <button className="action-card" onClick={() => navigate("/activity-search")}>
              <h3>Activities</h3>
              <p>Discover experiences</p>
            </button>
            <button className="action-card" onClick={() => navigate("/packing")}>
              <h3>Packing</h3>
              <p>Prepare essentials</p>
            </button>
          </div>
        </section>

        <section className="upcoming-section">
          <div className="section-header">
            <h2>Upcoming Trips</h2>
            <button className="view-all" onClick={() => navigate("/my-trips")}>View All</button>
          </div>

          {upcomingTrips.length === 0 ? (
            <div className="state-card">No trips yet. Create one and it will appear here.</div>
          ) : (
            <div className="trips-grid">
              {upcomingTrips.map((trip, index) => (
                <div key={trip.id} className="trip-card">
                  <div className="trip-image">
                    <img src={trip.cover_image || fallbackImages[index % fallbackImages.length]} alt={trip.title} />
                    <div className="trip-status">{trip.trip_type || "Planned"}</div>
                  </div>
                  <div className="trip-info">
                    <h3>{trip.title}</h3>
                    <p>{formatDateRange(trip)}</p>
                    <button className="view-btn" onClick={() => navigate("/itinerary")}>View Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <style>{`
        body { background: #050816; }
        .dashboard-page { width: 100%; min-height: 100vh; display: flex; background: #050816; color: white; }
        .sidebar { width: 280px; background: #0b1020; border-right: 1px solid rgba(255,255,255,0.08); padding: 34px 20px; display: flex; flex-direction: column; gap: 26px; }
        .logo { display: flex; align-items: center; gap: 12px; }
        .logo-icon { width: 42px; height: 42px; border-radius: 10px; background: linear-gradient(135deg,#57c7ff,#8f7cff); display: grid; place-items: center; }
        .logo h2 { font-size: 24px; margin: 0; }
        .menu { flex: 1; display: flex; flex-direction: column; gap: 10px; }
        .menu-item { padding: 14px 16px; border-radius: 8px; cursor: pointer; color: rgba(255,255,255,0.7); }
        .menu-item:hover, .menu-item.active { background: rgba(255,255,255,0.08); color: white; }
        .logout-btn { width: 100%; padding: 12px; border-radius: 8px; background: rgba(255,67,54,0.12); color: #ff8a80; cursor: pointer; font-weight: 700; }
        .main-content { flex: 1; padding: 40px; }
        .topbar { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 38px; }
        .greeting h1 { font-size: 42px; margin: 0 0 10px; }
        .greeting p { color: rgba(255,255,255,0.6); margin: 0; }
        .create-trip-btn, .view-btn { padding: 14px 24px; border-radius: 8px; background: linear-gradient(135deg,#57c7ff,#8f7cff); color: white; font-weight: 700; cursor: pointer; }
        .state-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 22px; margin-bottom: 24px; color: rgba(255,255,255,0.75); }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px,1fr)); gap: 18px; margin-bottom: 42px; }
        .stat-card, .action-card, .trip-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; }
        .stat-card { padding: 24px; }
        .stat-card h3 { font-size: 30px; margin: 0 0 6px; color: #57c7ff; }
        .stat-card p { color: rgba(255,255,255,0.6); margin: 0; }
        .quick-actions, .upcoming-section { margin-bottom: 42px; }
        .quick-actions h2, .section-header h2 { font-size: 24px; margin: 0 0 20px; }
        .action-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; }
        .action-card { text-align: left; padding: 22px; color: white; cursor: pointer; }
        .action-card h3 { margin: 0 0 6px; }
        .action-card p { margin: 0; color: rgba(255,255,255,0.55); }
        .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .view-all { background: transparent; color: #57c7ff; cursor: pointer; font-weight: 700; }
        .trips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 22px; }
        .trip-card { overflow: hidden; }
        .trip-image { height: 180px; position: relative; overflow: hidden; }
        .trip-image img { width: 100%; height: 100%; object-fit: cover; }
        .trip-status { position: absolute; top: 12px; right: 12px; background: rgba(87,199,255,0.85); color: white; padding: 6px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; }
        .trip-info { padding: 20px; }
        .trip-info h3 { margin: 0 0 8px; }
        .trip-info p { color: rgba(255,255,255,0.6); margin: 0 0 16px; }
        .view-btn { width: 100%; }
        @media (max-width: 900px) { .dashboard-page { flex-direction: column; } .sidebar { display: none; } .main-content { padding: 20px; } }
        @media (max-width: 700px) { .topbar { flex-direction: column; align-items: flex-start; } .greeting h1 { font-size: 30px; } .create-trip-btn { width: 100%; } }
      `}</style>
    </div>
  );
}
