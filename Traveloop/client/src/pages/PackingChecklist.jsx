import React from "react";

export default function PackingChecklist() {
  const essentials = [
    "Passport & Travel Documents",
    "Clothes & Jackets",
    "Sunglasses & Sunscreen",
    "Phone Charger & Power Bank",
    "Camera Equipment",
  ];

  const accessories = [
    "Headphones",
    "Travel Pillow",
    "Water Bottle",
    "Medicine Kit",
    "Laptop & Charger",
  ];

  return (
    <>
      <div className="packing-page">
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
              Packing Checklist
            </div>

            <div className="menu-item">
              Itinerary
            </div>

            <div className="menu-item">
              Settings
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="main-content">
          {/* TOPBAR */}
          <div className="topbar">
            <div>
              <h1>Packing Checklist</h1>

              <p>
                Organize everything you need before
                your journey begins.
              </p>
            </div>

            <button className="add-btn">
              + Add Item
            </button>
          </div>

          {/* SUMMARY */}
          <div className="summary-grid">
            <div className="summary-card">
              <span>Total Items</span>
              <h2>24</h2>
            </div>

            <div className="summary-card">
              <span>Packed</span>
              <h2>16</h2>
            </div>

            <div className="summary-card">
              <span>Remaining</span>
              <h2>8</h2>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="content-grid">
            {/* LEFT */}
            <div className="checklist-section">
              <div className="section-box">
                <h2>Travel Essentials</h2>

                {essentials.map((item, index) => (
                  <div
                    className="check-item"
                    key={index}
                  >
                    <div className="left">
                      <input type="checkbox" />

                      <p>{item}</p>
                    </div>

                    <span>✓</span>
                  </div>
                ))}
              </div>

              <div className="section-box">
                <h2>Accessories</h2>

                {accessories.map((item, index) => (
                  <div
                    className="check-item"
                    key={index}
                  >
                    <div className="left">
                      <input type="checkbox" />

                      <p>{item}</p>
                    </div>

                    <span>✓</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-panel">
              <div className="tips-box">
                <h2>Packing Tips</h2>

                <div className="tip-card">
                  <p>
                    Roll clothes instead of folding to
                    save luggage space.
                  </p>
                </div>

                <div className="tip-card">
                  <p>
                    Keep important documents in your
                    cabin bag.
                  </p>
                </div>

                <div className="tip-card">
                  <p>
                    Carry portable chargers for long
                    travel days.
                  </p>
                </div>
              </div>

              <div className="progress-box">
                <h2>Packing Progress</h2>

                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>

                <p>67% Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:"Poppins",sans-serif;
        }

        body{
          background:#050816;
        }

        .packing-page{
          min-height:100vh;
          display:flex;
          background:#050816;
          color:white;
        }

        /* SIDEBAR */

        .sidebar{
          width:260px;
          background:#0b1020;
          border-right:1px solid rgba(255,255,255,0.08);
          padding:30px 20px;
        }

        .logo{
          display:flex;
          align-items:center;
          gap:12px;
          margin-bottom:50px;
        }

        .logo-icon{
          width:42px;
          height:42px;
          border-radius:12px;

          background:linear-gradient(
            135deg,
            #57c7ff,
            #8f7cff
          );

          display:flex;
          align-items:center;
          justify-content:center;
        }

        .logo h2{
          font-size:24px;
        }

        .menu{
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .menu-item{
          padding:14px 18px;
          border-radius:14px;
          color:rgba(255,255,255,0.7);
          cursor:pointer;
          transition:0.3s;
        }

        .menu-item:hover,
        .menu-item.active{
          background:rgba(255,255,255,0.08);
          color:white;
        }

        /* MAIN */

        .main-content{
          flex:1;
          padding:40px;
        }

        .topbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:35px;
        }

        .topbar h1{
          font-size:42px;
          margin-bottom:8px;
        }

        .topbar p{
          color:rgba(255,255,255,0.6);
        }

        .add-btn{
          height:54px;
          padding:0 28px;
          border:none;
          border-radius:14px;

          background:linear-gradient(
            90deg,
            #57c7ff,
            #8f7cff
          );

          color:white;
          font-weight:600;
          cursor:pointer;
        }

        /* SUMMARY */

        .summary-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
          margin-bottom:35px;
        }

        .summary-card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          padding:28px;
          backdrop-filter:blur(20px);
        }

        .summary-card span{
          color:rgba(255,255,255,0.6);
        }

        .summary-card h2{
          margin-top:14px;
          font-size:34px;
          color:#57c7ff;
        }

        /* GRID */

        .content-grid{
          display:grid;
          grid-template-columns:1.5fr 1fr;
          gap:28px;
        }

        .section-box,
        .tips-box,
        .progress-box{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          padding:28px;
          backdrop-filter:blur(20px);
        }

        .section-box{
          margin-bottom:28px;
        }

        .section-box h2,
        .tips-box h2,
        .progress-box h2{
          margin-bottom:24px;
        }

        /* CHECK ITEM */

        .check-item{
          background:rgba(255,255,255,0.04);
          border-radius:18px;
          padding:20px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:16px;
        }

        .left{
          display:flex;
          align-items:center;
          gap:16px;
        }

        .left input{
          width:18px;
          height:18px;
        }

        .left p{
          color:rgba(255,255,255,0.8);
        }

        .check-item span{
          color:#57c7ff;
          font-size:18px;
        }

        /* TIPS */

        .tip-card{
          background:rgba(255,255,255,0.04);
          border-radius:18px;
          padding:20px;
          margin-bottom:16px;
        }

        .tip-card p{
          color:rgba(255,255,255,0.7);
          line-height:1.7;
        }

        /* PROGRESS */

        .progress-box{
          margin-top:28px;
        }

        .progress-bar{
          width:100%;
          height:16px;
          background:rgba(255,255,255,0.08);
          border-radius:50px;
          overflow:hidden;
          margin:25px 0 16px;
        }

        .progress-fill{
          width:67%;
          height:100%;

          background:linear-gradient(
            90deg,
            #57c7ff,
            #8f7cff
          );
        }

        .progress-box p{
          color:rgba(255,255,255,0.7);
        }

        /* RESPONSIVE */

        @media(max-width:1100px){
          .content-grid{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:900px){
          .sidebar{
            display:none;
          }

          .main-content{
            padding:20px;
          }

          .summary-grid{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:700px){
          .topbar{
            flex-direction:column;
            align-items:flex-start;
            gap:20px;
          }

          .topbar h1{
            font-size:34px;
          }
        }

      `}</style>
    </>
  );
}