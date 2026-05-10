import React from "react";

export default function CreateTrip() {
    return (
        <>
            <div className="create-trip-page">
                {/* SIDEBAR */}
                <div className="sidebar">
                    <div className="logo">
                        <div className="logo-icon">◉</div>
                        <h2>Traveloop</h2>
                    </div>

                    <div className="menu">
                        <div className="menu-item active">Dashboard</div>
                        <div className="menu-item">My Trips</div>
                        <div className="menu-item">Itinerary</div>
                        <div className="menu-item">Budget</div>
                        <div className="menu-item">Settings</div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="main-content">
                    {/* TOP BAR */}
                    <div className="topbar">
                        <div>
                            <h1>Create New Trip</h1>
                            <p>Plan your next luxury journey with AI assistance.</p>
                        </div>

                        <button className="save-btn">
                            Save Draft
                        </button>
                    </div>

                    {/* FORM */}
                    <div className="trip-form-container">
                        {/* LEFT FORM */}
                        <div className="trip-form">
                            {/* DESTINATION */}
                            <div className="form-group">
                                <label>Destination</label>

                                <input
                                    type="text"
                                    placeholder="Enter destination city"
                                />
                            </div>

                            {/* DATES */}
                            <div className="double-input">
                                <div className="form-group">
                                    <label>Start Date</label>

                                    <input type="date" />
                                </div>

                                <div className="form-group">
                                    <label>End Date</label>

                                    <input type="date" />
                                </div>
                            </div>

                            {/* TRAVELERS */}
                            <div className="double-input">
                                <div className="form-group">
                                    <label>Travelers</label>

                                    <input
                                        type="number"
                                        placeholder="2"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Trip Type</label>

                                    <select>
                                        <option>Luxury</option>
                                        <option>Adventure</option>
                                        <option>Family</option>
                                        <option>Business</option>
                                        <option>Solo</option>
                                    </select>
                                </div>
                            </div>

                            {/* BUDGET */}
                            <div className="form-group">
                                <label>Estimated Budget</label>

                                <input
                                    type="range"
                                    min="1000"
                                    max="10000"
                                />

                                <div className="budget-value">
                                    ₹ 50,000
                                </div>
                            </div>

                            {/* NOTES */}
                            <div className="form-group">
                                <label>Trip Notes</label>

                                <textarea
                                    placeholder="Add preferences, hotel choices, activity interests..."
                                ></textarea>
                            </div>

                            {/* BUTTONS */}
                            <div className="button-group">
                                <button className="cancel-btn">
                                    Cancel
                                </button>

                                <button className="create-btn">
                                    Create Trip
                                </button>
                            </div>
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="preview-panel">
                            <h2>AI Travel Assistant</h2>

                            <div className="ai-card">
                                <h3>Suggested Experience</h3>

                                <p>
                                    Based on your luxury travel preference,
                                    we recommend premium resorts, private
                                    transport, and curated experiences.
                                </p>
                            </div>

                            <div className="ai-card">
                                <h3>Best Season</h3>

                                <p>
                                    October to February offers the most
                                    comfortable climate and sightseeing
                                    conditions.
                                </p>
                            </div>

                            <div className="ai-card">
                                <h3>Estimated Cost</h3>

                                <p>
                                    Flights, hotels, food, and activities
                                    are projected around ₹50,000 - ₹80,000.
                                </p>
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

        .create-trip-page {
          display: flex;
          min-height: 100vh;
          background: #050816;
          color: white;
        }

        /* SIDEBAR */

        .sidebar {
          width: 260px;
          background: #0b1020;
          border-right: 1px solid rgba(255,255,255,0.08);
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
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
          margin-bottom: 40px;
        }

        .topbar h1 {
          font-size: 42px;
          margin-bottom: 8px;
        }

        .topbar p {
          color: rgba(255,255,255,0.6);
        }

        .save-btn {
          height: 50px;
          padding: 0 28px;
          border: none;
          border-radius: 14px;
          background: rgba(255,255,255,0.08);
          color: white;
          cursor: pointer;
        }

        /* FORM SECTION */

        .trip-form-container {
          display: flex;
          gap: 30px;
        }

        .trip-form {
          flex: 2;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 35px;
          backdrop-filter: blur(20px);
        }

        .form-group {
          margin-bottom: 26px;
        }

        .form-group label {
          display: block;
          margin-bottom: 12px;
          color: rgba(255,255,255,0.8);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 16px;
          color: white;
          outline: none;
          font-size: 15px;
        }

        .form-group textarea {
          min-height: 140px;
          resize: none;
        }

        .double-input {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .budget-value {
          margin-top: 12px;
          color: #57c7ff;
          font-weight: 600;
        }

        .button-group {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          margin-top: 30px;
        }

        .cancel-btn {
          height: 54px;
          padding: 0 28px;
          border-radius: 14px;
          border: none;
          background: rgba(255,255,255,0.08);
          color: white;
          cursor: pointer;
        }

        .create-btn {
          height: 54px;
          padding: 0 34px;
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

        /* RIGHT PANEL */

        .preview-panel {
          width: 350px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 30px;
          height: fit-content;
        }

        .preview-panel h2 {
          margin-bottom: 24px;
        }

        .ai-card {
          background: rgba(255,255,255,0.05);
          border-radius: 18px;
          padding: 20px;
          margin-bottom: 18px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .ai-card h3 {
          margin-bottom: 12px;
          color: #66d9ff;
        }

        .ai-card p {
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          font-size: 14px;
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .trip-form-container {
            flex-direction: column;
          }

          .preview-panel {
            width: 100%;
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
          .double-input {
            grid-template-columns: 1fr;
          }

          .topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .topbar h1 {
            font-size: 32px;
          }
        }
      `}</style>
        </>
    );
}