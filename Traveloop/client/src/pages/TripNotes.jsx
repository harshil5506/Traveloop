
export default function TripNotes() {
  const notes = [
    {
      title: "Beach Sunset Memory",
      date: "12 Oct 2026",
      description:
        "Captured a beautiful sunset near the Maldives resort while enjoying dinner by the beach.",
    },

    {
      title: "Scuba Diving Experience",
      date: "13 Oct 2026",
      description:
        "Experienced underwater coral reefs and marine life for the first time.",
    },

    {
      title: "Luxury Yacht Dinner",
      date: "15 Oct 2026",
      description:
        "Private yacht evening with live music and premium dining experience.",
    },
  ];

  return (
    <>
      <div className="notes-page">
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
              Trip Notes
            </div>

            <div className="menu-item">
              Shared Trips
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
              <h1>Trip Notes & Journal</h1>

              <p>
                Save your travel memories, stories,
                and important experiences.
              </p>
            </div>

            <button className="add-btn">
              + Add New Note
            </button>
          </div>

          {/* HERO */}
          <div className="hero-card">
            <div className="overlay"></div>

            <div className="hero-content">
              <span>Travel Journal</span>

              <h2>Maldives Luxury Escape</h2>

              <p>
                Preserve your unforgettable journey
                moments forever.
              </p>
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="content-grid">
            {/* LEFT */}
            <div className="notes-section">
              {notes.map((note, index) => (
                <div className="note-card" key={index}>
                  <div className="note-header">
                    <div>
                      <h2>{note.title}</h2>

                      <span>{note.date}</span>
                    </div>

                    <div className="actions">
                      <span>✏️</span>
                      <span>🗑️</span>
                    </div>
                  </div>

                  <p>{note.description}</p>

                  <button>View Full Note</button>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="right-panel">
              {/* QUICK NOTE */}
              <div className="quick-note-box">
                <h2>Quick Note</h2>

                <textarea placeholder="Write your quick travel thoughts..."></textarea>

                <button>Save Note</button>
              </div>

              {/* JOURNAL STATS */}
              <div className="stats-box">
                <h2>Journal Statistics</h2>

                <div className="stat-card">
                  <span>Total Notes</span>

                  <h3>18</h3>
                </div>

                <div className="stat-card">
                  <span>Photos Uploaded</span>

                  <h3>126</h3>
                </div>

                <div className="stat-card">
                  <span>Countries Visited</span>

                  <h3>7</h3>
                </div>
              </div>

              {/* MEMORIES */}
              <div className="memory-box">
                <h2>Favorite Memory</h2>

                <p>
                  Watching the sunset from the yacht
                  while soft music played in the
                  background was the most memorable
                  part of the trip.
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

        .notes-page{
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

        .note-card,
        .quick-note-box,
        .stats-box,
        .memory-box{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          padding:28px;
          backdrop-filter:blur(20px);
        }

        .note-card{
          margin-bottom:28px;
        }

        .stats-box,
        .memory-box{
          margin-top:28px;
        }

        /* NOTE CARD */

        .note-header{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          margin-bottom:20px;
        }

        .note-header h2{
          margin-bottom:8px;
        }

        .note-header span{
          color:#57c7ff;
          font-size:14px;
        }

        .actions{
          display:flex;
          gap:12px;
          cursor:pointer;
        }

        .note-card p{
          color:rgba(255,255,255,0.7);
          line-height:1.8;
          margin-bottom:24px;
        }

        .note-card button{
          height:48px;
          padding:0 22px;
          border:none;
          border-radius:12px;

          background:rgba(255,255,255,0.08);
          color:white;
          cursor:pointer;
        }

        /* QUICK NOTE */

        .quick-note-box h2,
        .stats-box h2,
        .memory-box h2{
          margin-bottom:24px;
        }

        .quick-note-box textarea{
          width:100%;
          min-height:180px;

          background:rgba(0,0,0,0.35);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:18px;

          padding:18px;
          color:white;
          outline:none;
          resize:none;

          margin-bottom:20px;
        }

        .quick-note-box button{
          width:100%;
          height:54px;
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

        .stat-card{
          background:rgba(255,255,255,0.04);
          border-radius:18px;
          padding:20px;
          margin-bottom:16px;
        }

        .stat-card span{
          color:rgba(255,255,255,0.6);
        }

        .stat-card h3{
          margin-top:10px;
          color:#57c7ff;
          font-size:28px;
        }

        /* MEMORY */

        .memory-box p{
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