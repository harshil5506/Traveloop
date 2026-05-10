import React from "react";

export default function AdminDashboard() {
  const users = [
    {
      name: "Jayraj Panchal",
      trip: "Maldives Escape",
      status: "Active",
    },

    {
      name: "Aarav Shah",
      trip: "Tokyo Adventure",
      status: "Pending",
    },

    {
      name: "Priya Patel",
      trip: "Paris Tour",
      status: "Completed",
    },
  ];

  return (
    <>
      <div className="admin-page">
        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="logo">
            <div className="logo-icon">◉</div>
            <h2>Traveloop Admin</h2>
          </div>

          <div className="menu">
            <div className="menu-item active">
              Dashboard
            </div>

            <div className="menu-item">
              Users
            </div>

            <div className="menu-item">
              Trips
            </div>

            <div className="menu-item">
              Analytics
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
              <h1>Admin Analytics Dashboard</h1>

              <p>
                Monitor platform activity, user trips,
                and performance analytics.
              </p>
            </div>

            <button className="report-btn">
              Generate Report
            </button>
          </div>

          {/* STATS */}
          <div className="stats-grid">
            <div className="stat-card">
              <span>Total Users</span>

              <h2>12,480</h2>
            </div>

            <div className="stat-card">
              <span>Total Trips</span>

              <h2>3,240</h2>
            </div>

            <div className="stat-card">
              <span>Revenue</span>

              <h2>₹18.4L</h2>
            </div>

            <div className="stat-card">
              <span>Active Users</span>

              <h2>1,284</h2>
            </div>
          </div>

          {/* GRID */}
          <div className="content-grid">
            {/* LEFT */}
            <div className="analytics-section">
              {/* CHART */}
              <div className="chart-box">
                <h2>Monthly Growth</h2>

                <div className="chart">
                  <div className="bar one"></div>
                  <div className="bar two"></div>
                  <div className="bar three"></div>
                  <div className="bar four"></div>
                  <div className="bar five"></div>
                  <div className="bar six"></div>
                </div>
              </div>

              {/* USERS */}
              <div className="users-box">
                <h2>Recent Travelers</h2>

                {users.map((user, index) => (
                  <div
                    className="user-card"
                    key={index}
                  >
                    <div className="user-left">
                      <div className="avatar">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <h3>{user.name}</h3>

                        <p>{user.trip}</p>
                      </div>
                    </div>

                    <span className="status">
                      {user.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-panel">
              {/* SYSTEM */}
              <div className="system-box">
                <h2>System Status</h2>

                <div className="system-card">
                  <span>Server Health</span>

                  <h3>98%</h3>
                </div>

                <div className="system-card">
                  <span>API Requests</span>

                  <h3>12.8K</h3>
                </div>

                <div className="system-card">
                  <span>Storage Usage</span>

                  <h3>74%</h3>
                </div>
              </div>

              {/* ACTIVITY */}
              <div className="activity-box">
                <h2>Recent Activity</h2>

                <div className="activity-card">
                  <p>
                    New premium traveler registered.
                  </p>
                </div>

                <div className="activity-card">
                  <p>
                    Maldives itinerary shared publicly.
                  </p>
                </div>

                <div className="activity-card">
                  <p>
                    Revenue milestone reached today.
                  </p>
                </div>
              </div>

              {/* AI INSIGHTS */}
              <div className="insight-box">
                <h2>AI Insights</h2>

                <p>
                  Luxury beach destinations are
                  currently trending with a 34%
                  increase in bookings this month.
                </p>
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

        .admin-page{
          min-height:100vh;
          display:flex;
          background:#050816;
          color:white;
        }

        /* SIDEBAR */

        .sidebar{
          width:280px;
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

        .report-btn{
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

        /* STATS */

        .stats-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:24px;
          margin-bottom:35px;
        }

        .stat-card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          padding:28px;
          backdrop-filter:blur(20px);
        }

        .stat-card span{
          color:rgba(255,255,255,0.6);
        }

        .stat-card h2{
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

        .chart-box,
        .users-box,
        .system-box,
        .activity-box,
        .insight-box{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          padding:28px;
          backdrop-filter:blur(20px);
        }

        .users-box{
          margin-top:28px;
        }

        .activity-box,
        .insight-box{
          margin-top:28px;
        }

        .chart-box h2,
        .users-box h2,
        .system-box h2,
        .activity-box h2,
        .insight-box h2{
          margin-bottom:24px;
        }

        /* CHART */

        .chart{
          height:280px;
          display:flex;
          align-items:flex-end;
          gap:18px;
        }

        .bar{
          flex:1;
          border-radius:14px 14px 0 0;

          background:linear-gradient(
            to top,
            #57c7ff,
            #8f7cff
          );
        }

        .one{height:40%;}
        .two{height:65%;}
        .three{height:50%;}
        .four{height:90%;}
        .five{height:75%;}
        .six{height:60%;}

        /* USERS */

        .user-card{
          display:flex;
          justify-content:space-between;
          align-items:center;

          background:rgba(255,255,255,0.04);
          padding:18px;
          border-radius:18px;
          margin-bottom:16px;
        }

        .user-left{
          display:flex;
          align-items:center;
          gap:16px;
        }

        .avatar{
          width:50px;
          height:50px;
          border-radius:50%;

          background:linear-gradient(
            135deg,
            #57c7ff,
            #8f7cff
          );

          display:flex;
          align-items:center;
          justify-content:center;

          font-weight:600;
        }

        .user-card p{
          color:rgba(255,255,255,0.6);
          margin-top:4px;
        }

        .status{
          background:rgba(255,255,255,0.08);
          padding:8px 14px;
          border-radius:50px;
          font-size:13px;
        }

        /* SYSTEM */

        .system-card{
          background:rgba(255,255,255,0.04);
          border-radius:18px;
          padding:20px;
          margin-bottom:16px;
        }

        .system-card span{
          color:rgba(255,255,255,0.6);
        }

        .system-card h3{
          margin-top:10px;
          color:#57c7ff;
          font-size:28px;
        }

        /* ACTIVITY */

        .activity-card{
          background:rgba(255,255,255,0.04);
          border-radius:18px;
          padding:20px;
          margin-bottom:16px;
        }

        .activity-card p{
          color:rgba(255,255,255,0.7);
          line-height:1.7;
        }

        /* INSIGHTS */

        .insight-box p{
          color:rgba(255,255,255,0.7);
          line-height:1.8;
        }

        /* RESPONSIVE */

        @media(max-width:1200px){
          .stats-grid{
            grid-template-columns:repeat(2,1fr);
          }

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
        }

        @media(max-width:700px){
          .stats-grid{
            grid-template-columns:1fr;
          }

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