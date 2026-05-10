import React from "react";

export default function Signup() {
    return (
        <>
            <div className="signup-container">
                {/* LEFT SIDE */}
                <div className="left-panel">
                    <div className="overlay"></div>

                    <div className="brand">
                        <div className="logo">◉</div>
                        <span>Traveloop</span>
                    </div>

                    <div className="hero-content">
                        <h1>
                            Begin Your
                            <br />
                            <span>Luxury Journey.</span>
                        </h1>

                        <p>
                            Create your Traveloop account and unlock intelligent
                            travel planning, premium experiences, and seamless
                            itinerary management.
                        </p>
                    </div>

                    <div className="bottom-text">
                        PREMIUM EXPLORER EDITION
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="right-panel">
                    <div className="signup-box">
                        <h2>Create Account</h2>

                        <p className="subtitle">
                            Fill in your details to get started with Traveloop.
                        </p>

                        {/* FULL NAME */}
                        <div className="input-group">
                            <label>Full Name</label>

                            <div className="input-box">
                                <span>👤</span>
                                <input
                                    type="text"
                                    placeholder="Jayraj Panchal"
                                />
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="input-group">
                            <label>Email Address</label>

                            <div className="input-box">
                                <span>✉</span>
                                <input
                                    type="email"
                                    placeholder="traveler@traveloop.com"
                                />
                            </div>
                        </div>

                        {/* PASSWORD */}
                        <div className="input-group">
                            <label>Password</label>

                            <div className="input-box">
                                <span>🔒</span>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div className="input-group">
                            <label>Confirm Password</label>

                            <div className="input-box">
                                <span>🔐</span>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* TERMS */}
                        <div className="terms">
                            <input type="checkbox" />
                            <p>
                                I agree to the Terms & Conditions and Privacy Policy
                            </p>
                        </div>

                        {/* BUTTON */}
                        <button className="signup-btn">
                            Create Account
                        </button>

                        <div className="divider">Or continue with</div>

                        {/* SOCIAL BUTTONS */}
                        <div className="social-buttons">
                            <button>Google</button>
                            <button>Apple</button>
                        </div>

                        <p className="login-text">
                            Already have an account? <span>Login</span>
                        </p>
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

        .signup-container {
          width: 100%;
          min-height: 100vh;
          display: flex;
          background: #050816;
        }

        /* LEFT SIDE */

        .left-panel {
          width: 58%;
          position: relative;
          background: linear-gradient(
              rgba(0, 0, 0, 0.6),
              rgba(0, 0, 0, 0.8)
            ),
            url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1974&auto=format&fit=crop");
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 60px;
          overflow: hidden;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(87, 199, 255, 0.2),
            rgba(143, 124, 255, 0.2)
          );
        }

        .brand {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          font-size: 24px;
          font-weight: 600;
        }

        .logo {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 550px;
        }

        .hero-content h1 {
          color: white;
          font-size: 66px;
          line-height: 1.1;
          margin-bottom: 24px;
          font-weight: 700;
        }

        .hero-content h1 span {
          color: #66d9ff;
        }

        .hero-content p {
          color: rgba(255,255,255,0.75);
          font-size: 18px;
          line-height: 1.8;
        }

        .bottom-text {
          position: relative;
          z-index: 2;
          color: rgba(255,255,255,0.45);
          letter-spacing: 3px;
          font-size: 12px;
        }

        /* RIGHT SIDE */

        .right-panel {
          width: 42%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
          background: #040b1d;
        }

        .signup-box {
          width: 100%;
          max-width: 440px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 40px rgba(0,0,0,0.3);
        }

        .signup-box h2 {
          color: white;
          font-size: 38px;
          margin-bottom: 10px;
        }

        .subtitle {
          color: rgba(255,255,255,0.6);
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .input-group {
          margin-bottom: 22px;
        }

        .input-group label {
          display: block;
          margin-bottom: 10px;
          color: rgba(255,255,255,0.8);
          font-size: 14px;
        }

        .input-box {
          height: 56px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 0 18px;
        }

        .input-box span {
          color: rgba(255,255,255,0.5);
        }

        .input-box input {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          font-size: 15px;
        }

        .input-box input::placeholder {
          color: rgba(255,255,255,0.35);
        }

        .terms {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 5px;
          margin-bottom: 28px;
        }

        .terms input {
          margin-top: 4px;
        }

        .terms p {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          line-height: 1.6;
        }

        .signup-btn {
          width: 100%;
          height: 58px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(
            90deg,
            #57c7ff,
            #8f7cff
          );
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .signup-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(87,199,255,0.35);
        }

        .divider {
          text-align: center;
          margin: 28px 0;
          color: rgba(255,255,255,0.45);
          font-size: 14px;
        }

        .social-buttons {
          display: flex;
          gap: 16px;
        }

        .social-buttons button {
          flex: 1;
          height: 52px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .social-buttons button:hover {
          background: rgba(255,255,255,0.08);
        }

        .login-text {
          text-align: center;
          margin-top: 30px;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
        }

        .login-text span {
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .left-panel {
            display: none;
          }

          .right-panel {
            width: 100%;
          }

          .signup-box {
            max-width: 500px;
          }
        }

        @media (max-width: 600px) {
          .right-panel {
            padding: 20px;
          }

          .signup-box {
            padding: 28px 20px;
          }

          .signup-box h2 {
            font-size: 30px;
          }
        }
      `}</style>
        </>
    );
}