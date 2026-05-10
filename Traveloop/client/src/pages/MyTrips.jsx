import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTrip, getTrips } from "../lib/api";

const fallbackImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop",
];

const formatDate = (value) => {
  if (!value) return "Not set";
  return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
};

export default function MyTrips() {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All Trips");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getTrips()
      .then((data) => {
        if (active) {
          setTrips(data);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message || "Unable to load trips");
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchesQuery = `${trip.title} ${trip.destination}`.toLowerCase().includes(query.toLowerCase());
      const tripStatus = new Date(trip.start_date) > new Date() ? "Upcoming" : "Completed";
      return matchesQuery && (status === "All Trips" || status === tripStatus);
    });
  }, [query, status, trips]);

  const handleDelete = async (id) => {
    await deleteTrip(id);
    setTrips((current) => current.filter((trip) => trip.id !== id));
  };

  return (
    <div className="mytrips-page">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">◎</div>
          <h2>Traveloop</h2>
        </div>

        <div className="menu">
          <div className="menu-item" onClick={() => navigate("/dashboard")}>Dashboard</div>
          <div className="menu-item active">My Trips</div>
          <div className="menu-item" onClick={() => navigate("/create-trip")}>Create Trip</div>
          <div className="menu-item" onClick={() => navigate("/itinerary")}>Itinerary</div>
          <div className="menu-item" onClick={() => navigate("/budget")}>Budget</div>
          <div className="menu-item" onClick={() => navigate("/profile")}>Settings</div>
        </div>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <div>
            <h1>My Trips</h1>
            <p>Manage and explore all your travel plans.</p>
          </div>

          <button className="create-btn" onClick={() => navigate("/create-trip")}>
            + Create New Trip
          </button>
        </div>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search your trips..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>All Trips</option>
            <option>Upcoming</option>
            <option>Completed</option>
          </select>
        </div>

        {error && <div className="state-card">{error}</div>}
        {loading && <div className="state-card">Loading trips...</div>}
        {!loading && !error && filteredTrips.length === 0 && (
          <div className="state-card">
            No trips yet. Create your first trip to start planning.
          </div>
        )}

        <div className="trips-grid">
          {filteredTrips.map((trip, index) => {
            const tripStatus = new Date(trip.start_date) > new Date() ? "Upcoming" : "Completed";
            const image = trip.cover_image || fallbackImages[index % fallbackImages.length];

            return (
              <div className="trip-card" key={trip.id}>
                <div className="trip-image" style={{ backgroundImage: `url(${image})` }}>
                  <div className="overlay" />
                  <span className="status">{tripStatus}</span>
                </div>

                <div className="trip-content">
                  <h2>{trip.title}</h2>
                  <p className="trip-date">{formatDate(trip.start_date)} - {formatDate(trip.end_date)}</p>
                  <p className="trip-description">{trip.description || `${trip.trip_type} trip for ${trip.travelers} traveler(s).`}</p>

                  <div className="trip-footer">
                    <div>
                      <span className="label">Budget</span>
                      <h3>₹{Number(trip.budget || 0).toLocaleString("en-IN")}</h3>
                    </div>
                    <div className="trip-actions">
                      <button onClick={() => navigate("/itinerary")}>View</button>
                      <button className="danger" onClick={() => handleDelete(trip.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <style>{`
        body { background: #050816; }
        .mytrips-page { min-height: 100vh; display: flex; background: #050816; color: white; }
        .sidebar { width: 260px; background: #0b1020; border-right: 1px solid rgba(255,255,255,0.08); padding: 30px 20px; }
        .logo { display: flex; align-items: center; gap: 12px; margin-bottom: 50px; }
        .logo-icon { width: 42px; height: 42px; border-radius: 10px; background: linear-gradient(135deg,#57c7ff,#8f7cff); display: grid; place-items: center; }
        .logo h2 { font-size: 24px; }
        .menu { display: flex; flex-direction: column; gap: 14px; }
        .menu-item { padding: 14px 18px; border-radius: 8px; color: rgba(255,255,255,0.7); cursor: pointer; }
        .menu-item:hover, .menu-item.active { background: rgba(255,255,255,0.08); color: white; }
        .main-content { flex: 1; padding: 40px; }
        .topbar { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 35px; }
        .topbar h1 { font-size: 42px; margin: 0 0 8px; }
        .topbar p { color: rgba(255,255,255,0.6); margin: 0; }
        .create-btn { height: 52px; padding: 0 26px; border-radius: 8px; background: linear-gradient(90deg,#57c7ff,#8f7cff); color: white; font-weight: 700; cursor: pointer; }
        .search-section { display: flex; gap: 20px; margin-bottom: 30px; }
        .search-section input, .search-section select { height: 54px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.05); color: white; padding: 0 16px; outline: none; }
        .search-section input { flex: 1; }
        .search-section select { width: 220px; }
        .state-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 24px; margin-bottom: 24px; color: rgba(255,255,255,0.75); }
        .trips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .trip-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; overflow: hidden; }
        .trip-image { height: 220px; background-size: cover; background-position: center; position: relative; }
        .overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15)); }
        .status { position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); padding: 8px 12px; border-radius: 999px; font-size: 13px; }
        .trip-content { padding: 22px; }
        .trip-content h2 { margin: 0 0 10px; font-size: 24px; }
        .trip-date, .trip-description { color: rgba(255,255,255,0.65); margin: 0 0 14px; line-height: 1.5; }
        .trip-footer { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; margin-top: 20px; }
        .label { color: rgba(255,255,255,0.5); font-size: 13px; }
        .trip-footer h3 { color: #57c7ff; margin: 5px 0 0; }
        .trip-actions { display: flex; gap: 8px; }
        .trip-actions button { height: 42px; padding: 0 16px; border-radius: 8px; background: rgba(255,255,255,0.08); color: white; cursor: pointer; }
        .trip-actions .danger { color: #ff8a80; }
        @media (max-width: 900px) { .sidebar { display: none; } .main-content { padding: 20px; } }
        @media (max-width: 700px) { .topbar, .search-section { flex-direction: column; align-items: stretch; } .search-section select { width: 100%; } .topbar h1 { font-size: 34px; } }
      `}</style>
    </div>
  );
}
