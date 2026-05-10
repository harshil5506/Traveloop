import React from "react";

export default function ProfileSettings() {
  return (
    <>
      <div className="profile-page">
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
              Profile Settings
            </div>

            <div className="menu-item">
              Shared Trips
            </div>

            <div className="menu-item">
              Logout
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="main-content">
          {/* TOPBAR */}
          <div className="topbar">
            <div>
              <h1>Profile Settings</h1>

              <p>
                Manage your account preferences and
                personal information.
              </p>
            </div>

            <button className="save-btn">
              Save Changes
            </button>
          </div>

          {/* PROFILE GRID */}
          <div className="content-grid">
            {/* LEFT SIDE */}
            <div className="profile-section">
              {/* PROFILE CARD */}
              <div className="profile-card">
                <div className="avatar">
                  J
                </div>

                <h2>Jayraj Panchal</h2>

                <p>
                  Premium Traveler • Explorer Member
                </p>

                <button>
                  Change Profile Photo
                </button>
              </div>

              {/* ACCOUNT SETTINGS */}
              <div className="settings-card">
                <h2>Account Settings</h2>

                <div className="setting-item">
                  <span>Email Notifications</span>

                  <div className="toggle active"></div>
                </div>

                <div className="setting-item">
                  <span>Public Profile</span>

                  <div className="toggle"></div>
                </div>

                <div className="setting-item">
                  <span>2FA Authentication</span>

                  <div className="toggle active"></div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="form-section">
              <div className="form-card">
                <h2>Personal Information</h2>

                <div className="double-input">
                  <div className="input-group">
                    <label>First Name</label>

                    <input
                      type="text"
                      placeholder="Jayraj"
                    />
                  </div>

                  <div className="input-group">
                    <label>Last Name</label>

                    <input
                      type="text"
                      placeholder="Panchal"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="jayraj@email.com"
                  />
                </div>

                <div className="input-group">
                  <label>Phone Number</label>

                  <input
                    type="text"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div className="input-group">
                  <label>Bio</label>

                  <textarea
                    placeholder="Tell something about yourself..."
                  ></textarea>
                </div>
              </div>

              {/* PASSWORD */}
              <div className="form-card">
                <h2>Change Password</h2>

                <div className="input-group">
                  <label>Current Password</label>

                  <input
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="input-group">
                  <label>New Password</label>

                  <input
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="input-group">
                  <label>Confirm Password</label>

                  <input
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <button className="password-btn">
                  Update Password
                </button>
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

        .profile-page{
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

        .save-btn{
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

        /* GRID */

        .content-grid{
          display:grid;
          grid-template-columns:1fr 1.5fr;
          gap:28px;
        }

        .profile-card,
        .settings-card,
        .form-card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          padding:28px;
          backdrop-filter:blur(20px);
        }

        .settings-card{
          margin-top:28px;
        }

        .form-card{
          margin-bottom:28px;
        }

        /* PROFILE */

        .profile-card{
          text-align:center;
        }

        .avatar{
          width:110px;
          height:110px;
          border-radius:50%;

          background:linear-gradient(
            135deg,
            #57c7ff,
            #8f7cff
          );

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:42px;
          font-weight:600;

          margin:auto;
          margin-bottom:24px;
        }

        .profile-card h2{
          margin-bottom:10px;
        }

        .profile-card p{
          color:rgba(255,255,255,0.6);
          margin-bottom:24px;
        }

        .profile-card button{
          width:100%;
          height:52px;
          border:none;
          border-radius:14px;

          background:rgba(255,255,255,0.08);
          color:white;
          cursor:pointer;
        }

        /* SETTINGS */

        .settings-card h2,
        .form-card h2{
          margin-bottom:24px;
        }

        .setting-item{
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

        /* FORM */

        .double-input{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        .input-group{
          margin-bottom:22px;
        }

        .input-group label{
          display:block;
          margin-bottom:10px;
          color:rgba(255,255,255,0.8);
        }

        .input-group input,
        .input-group textarea{
          width:100%;
          background:rgba(0,0,0,0.35);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:14px;
          padding:16px;
          color:white;
          outline:none;
        }

        .input-group textarea{
          min-height:140px;
          resize:none;
        }

        .password-btn{
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

          .double-input{
            grid-template-columns:1fr;
          }

          .topbar h1{
            font-size:34px;
          }
        }

      `}</style>
    </>
  );
}