
export default function SharedItinerary() {
  const travelers = [
    {
      name: "Jayraj",
      role: "Trip Owner",
    },

    {
      name: "Aarav",
      role: "Traveler",
    },

    {
      name: "Priya",
      role: "Traveler",
    },
  ];

  const itinerary = [
    {
      day: "Day 1",
      activity: "Arrival & Beach Dinner",
      time: "6:00 PM",
    },

    {
      day: "Day 2",
      activity: "Scuba Diving Adventure",
      time: "10:00 AM",
    },

    {
      day: "Day 3",
      activity: "Luxury Yacht Cruise",
      time: "5:30 PM",
    },
  ];

  return (
    <>
      <div className="shared-page">
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
              Shared Itinerary
            </div>

            <div className="menu-item">
              Budget
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
              <h1>Shared Itinerary</h1>

              <p>
                Collaborate and share travel plans with
                your companions.
              </p>
            </div>

            <div className="button-group">
              <button className="copy-btn">
                Copy Link
              </button>

              <button className="share-btn">
                Share Trip
              </button>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="hero-card">
            <div className="overlay"></div>

            <div className="hero-content">
              <span>Luxury Group Journey</span>

              <h2>Maldives Shared Adventure</h2>

              <p>
                Shared with 3 travelers • 7 Days Trip
              </p>
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="content-grid">
            {/* LEFT */}
            <div className="itinerary-section">
              <div className="section-box">
                <h2>Trip Schedule</h2>

                {itinerary.map((item, index) => (
                  <div
                    className="timeline-card"
                    key={index}
                  >
                    <div className="timeline-left">
                      <div className="circle"></div>

                      <div className="line"></div>
                    </div>

                    <div className="timeline-content">
                      <span>{item.day}</span>

                      <h3>{item.activity}</h3>

                      <p>{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-panel">
              {/* TRAVELERS */}
              <div className="travelers-box">
                <h2>Travel Members</h2>

                {travelers.map((traveler, index) => (
                  <div
                    className="traveler-card"
                    key={index}
                  >
                    <div className="avatar">
                      {traveler.name.charAt(0)}
                    </div>

                    <div>
                      <h3>{traveler.name}</h3>

                      <p>{traveler.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* SHARE SETTINGS */}
              <div className="settings-box">
                <h2>Sharing Settings</h2>

                <div className="setting-card">
                  <span>Public Access</span>

                  <div className="toggle active"></div>
                </div>

                <div className="setting-card">
                  <span>Allow Editing</span>

                  <div className="toggle"></div>
                </div>

                <div className="setting-card">
                  <span>Comments Enabled</span>

                  <div className="toggle active"></div>
                </div>
              </div>

              {/* NOTES */}
              <div className="notes-box">
                <h2>Shared Notes</h2>

                <p>
                  Remember to carry travel documents,
                  beachwear, and chargers before
                  departure.
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

        .shared-page{
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

        .button-group{
          display:flex;
          gap:16px;
        }

        .copy-btn,
        .share-btn{
          height:54px;
          padding:0 26px;
          border:none;
          border-radius:14px;
          cursor:pointer;
          color:white;
          font-weight:600;
        }

        .copy-btn{
          background:rgba(255,255,255,0.08);
        }

        .share-btn{
          background:linear-gradient(
            90deg,
            #57c7ff,
            #8f7cff
          );
        }

        /* HERO */

        .hero-card{
          height:280px;
          border-radius:28px;
          overflow:hidden;
          position:relative;
          margin-bottom:35px;

          background-image:url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1974&auto=format&fit=crop");

          background-size:cover;
          background-position:center;
        }

        .overlay{
          position:absolute;
          inset:0;

          background:linear-gradient(
            to top,
            rgba(0,0,0,0.85),
            rgba(0,0,0,0.2)
          );
        }

        .hero-content{
          position:absolute;
          left:35px;
          bottom:35px;
          z-index:2;
        }

        .hero-content span{
          color:#66d9ff;
        }

        .hero-content h2{
          font-size:42px;
          margin:12px 0;
        }

        .hero-content p{
          color:rgba(255,255,255,0.7);
        }

        /* GRID */

        .content-grid{
          display:grid;
          grid-template-columns:1.5fr 1fr;
          gap:28px;
        }

        .section-box,
        .travelers-box,
        .settings-box,
        .notes-box{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          padding:28px;
          backdrop-filter:blur(20px);
        }

        .travelers-box,
        .settings-box{
          margin-bottom:28px;
        }

        .section-box h2,
        .travelers-box h2,
        .settings-box h2,
        .notes-box h2{
          margin-bottom:24px;
        }

        /* TIMELINE */

        .timeline-card{
          display:flex;
          gap:18px;
          margin-bottom:24px;
        }

        .timeline-left{
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        .circle{
          width:16px;
          height:16px;
          border-radius:50%;
          background:#57c7ff;
        }

        .line{
          width:2px;
          height:100%;
          background:rgba(255,255,255,0.1);
          margin-top:8px;
        }

        .timeline-content{
          background:rgba(255,255,255,0.04);
          padding:20px;
          border-radius:18px;
          flex:1;
        }

        .timeline-content span{
          color:#57c7ff;
          font-size:14px;
        }

        .timeline-content h3{
          margin:10px 0;
        }

        .timeline-content p{
          color:rgba(255,255,255,0.6);
        }

        /* TRAVELERS */

        .traveler-card{
          display:flex;
          align-items:center;
          gap:16px;

          background:rgba(255,255,255,0.04);
          padding:18px;
          border-radius:18px;
          margin-bottom:16px;
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

        .traveler-card p{
          color:rgba(255,255,255,0.6);
          margin-top:4px;
        }

        /* SETTINGS */

        .setting-card{
          display:flex;
          justify-content:space-between;
          align-items:center;

          background:rgba(255,255,255,0.04);
          padding:18px;
          border-radius:18px;
          margin-bottom:16px;
        }

        .toggle{
          width:52px;
          height:28px;
          border-radius:50px;
          background:rgba(255,255,255,0.15);
          position:relative;
        }

        .toggle::before{
          content:"";
          position:absolute;
          width:22px;
          height:22px;
          border-radius:50%;
          background:white;
          top:3px;
          left:3px;
        }

        .toggle.active{
          background:#57c7ff;
        }

        .toggle.active::before{
          left:27px;
        }

        /* NOTES */

        .notes-box p{
          color:rgba(255,255,255,0.7);
          line-height:1.8;
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
        }

        @media(max-width:700px){
          .topbar{
            flex-direction:column;
            align-items:flex-start;
            gap:20px;
          }

          .button-group{
            width:100%;
            flex-direction:column;
          }

          .topbar h1{
            font-size:34px;
          }

          .hero-content h2{
            font-size:30px;
          }
        }

      `}</style>
    </>
  );
}