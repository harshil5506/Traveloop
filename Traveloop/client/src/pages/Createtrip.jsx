import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTrip } from "../lib/api";

export default function CreateTrip() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    destination: "",
    start_date: "",
    end_date: "",
    travelers: 2,
    trip_type: "Luxury",
    budget: 50000,
    description: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await createTrip({
        ...form,
        title: form.destination,
        cover_image: "",
      });
      navigate("/my-trips");
    } catch (err) {
      setError(err.message || "Could not create trip");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-trip-page">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">◎</div>
          <h2>Traveloop</h2>
        </div>

        <div className="menu">
          <div className="menu-item" onClick={() => navigate("/dashboard")}>Dashboard</div>
          <div className="menu-item" onClick={() => navigate("/my-trips")}>My Trips</div>
          <div className="menu-item active">Create Trip</div>
          <div className="menu-item" onClick={() => navigate("/budget")}>Budget</div>
          <div className="menu-item" onClick={() => navigate("/profile")}>Settings</div>
        </div>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <div>
            <h1>Create New Trip</h1>
            <p>Plan your next journey and save it to your Traveloop dashboard.</p>
          </div>

          <button className="save-btn" type="button" onClick={() => navigate("/my-trips")}>
            My Trips
          </button>
        </div>

        <form className="trip-form-container" onSubmit={handleSubmit}>
          <section className="trip-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label>Destination</label>
              <input
                type="text"
                placeholder="Enter destination city"
                value={form.destination}
                onChange={(event) => updateField("destination", event.target.value)}
                required
              />
            </div>

            <div className="double-input">
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  value={form.start_date}
                  onChange={(event) => updateField("start_date", event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>End Date</label>
                <input
                  type="date"
                  value={form.end_date}
                  onChange={(event) => updateField("end_date", event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="double-input">
              <div className="form-group">
                <label>Travelers</label>
                <input
                  type="number"
                  min="1"
                  value={form.travelers}
                  onChange={(event) => updateField("travelers", event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Trip Type</label>
                <select
                  value={form.trip_type}
                  onChange={(event) => updateField("trip_type", event.target.value)}
                >
                  <option>Luxury</option>
                  <option>Adventure</option>
                  <option>Family</option>
                  <option>Business</option>
                  <option>Solo</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Estimated Budget</label>
              <input
                type="range"
                min="1000"
                max="300000"
                step="1000"
                value={form.budget}
                onChange={(event) => updateField("budget", event.target.value)}
              />
              <div className="budget-value">₹ {Number(form.budget).toLocaleString("en-IN")}</div>
            </div>

            <div className="form-group">
              <label>Trip Notes</label>
              <textarea
                placeholder="Add preferences, hotel choices, activity interests..."
                value={form.description}
                onChange={(event) => updateField("description", event.target.value)}
              />
            </div>

            <div className="button-group">
              <button className="cancel-btn" type="button" onClick={() => navigate("/dashboard")}>
                Cancel
              </button>
              <button className="create-btn" type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Trip"}
              </button>
            </div>
          </section>

          <aside className="preview-panel">
            <h2>Trip Preview</h2>
            <div className="ai-card">
              <h3>{form.destination || "Your destination"}</h3>
              <p>{form.description || "Add notes to personalize your plan."}</p>
            </div>
            <div className="ai-card">
              <h3>Budget</h3>
              <p>Estimated at ₹{Number(form.budget).toLocaleString("en-IN")} for {form.travelers} traveler(s).</p>
            </div>
            <div className="ai-card">
              <h3>Dates</h3>
              <p>{form.start_date || "Start date"} to {form.end_date || "End date"}</p>
            </div>
          </aside>
        </form>
      </main>

      <style>{`
        body { background: #050816; }
        .create-trip-page {
          display: flex;
          min-height: 100vh;
          background: #050816;
          color: white;
        }
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
          border-radius: 10px;
          background: linear-gradient(135deg, #57c7ff, #8f7cff);
          display: grid;
          place-items: center;
        }
        .logo h2 { font-size: 24px; }
        .menu { display: flex; flex-direction: column; gap: 14px; }
        .menu-item {
          padding: 14px 18px;
          border-radius: 8px;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
        }
        .menu-item:hover, .menu-item.active { background: rgba(255,255,255,0.08); color: white; }
        .main-content { flex: 1; padding: 40px; }
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }
        .topbar h1 { font-size: 42px; margin: 0 0 8px; }
        .topbar p { color: rgba(255,255,255,0.6); margin: 0; }
        .save-btn, .cancel-btn {
          height: 50px;
          padding: 0 26px;
          border-radius: 8px;
          background: rgba(255,255,255,0.08);
          color: white;
          cursor: pointer;
        }
        .trip-form-container { display: flex; gap: 30px; align-items: flex-start; }
        .trip-form {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 32px;
        }
        .form-group { margin-bottom: 24px; }
        .form-group label { display: block; margin-bottom: 10px; color: rgba(255,255,255,0.8); }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 15px;
          color: white;
          outline: none;
        }
        .form-group textarea { min-height: 130px; resize: vertical; }
        .double-input { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .budget-value { color: #57c7ff; font-weight: 700; margin-top: 10px; }
        .button-group { display: flex; justify-content: flex-end; gap: 14px; }
        .create-btn {
          height: 50px;
          padding: 0 30px;
          border-radius: 8px;
          background: linear-gradient(90deg, #57c7ff, #8f7cff);
          color: white;
          font-weight: 700;
          cursor: pointer;
        }
        .create-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .preview-panel {
          width: 340px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 28px;
        }
        .preview-panel h2 { margin: 0 0 20px; }
        .ai-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 18px;
          margin-bottom: 16px;
        }
        .ai-card h3 { color: #66d9ff; margin: 0 0 10px; }
        .ai-card p { color: rgba(255,255,255,0.68); line-height: 1.6; margin: 0; }
        .error-message {
          background: rgba(255, 67, 54, 0.12);
          border: 1px solid rgba(255, 67, 54, 0.35);
          border-radius: 8px;
          color: #ff8a80;
          margin-bottom: 22px;
          padding: 14px 16px;
        }
        @media (max-width: 1100px) {
          .trip-form-container { flex-direction: column; }
          .preview-panel { width: 100%; }
        }
        @media (max-width: 900px) {
          .sidebar { display: none; }
          .main-content { padding: 20px; }
        }
        @media (max-width: 700px) {
          .topbar { flex-direction: column; align-items: flex-start; }
          .double-input { grid-template-columns: 1fr; }
          .topbar h1 { font-size: 32px; }
        }
      `}</style>
    </div>
  );
}
