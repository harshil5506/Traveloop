import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        // Validation
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!termsAccepted) {
            setError("Please accept the Terms & Conditions");
            return;
        }

        setLoading(true);

        try {
            // Call your backend API
            const response = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: fullName,
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Signup failed. Please try again.");
            }

            const data = await response.json();
            const { token, user } = data;

            // Store in context and localStorage
            login(user, token);

            // Redirect to dashboard
            navigate("/dashboard");
        } catch (err) {
            setError(err.message || "An error occurred during signup");
        } finally {
            setLoading(false);
        }
    };

    const handleLoginClick = () => {
        navigate("/");
    };

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

                        {error && (
                            <div className="error-message">{error}</div>
                        )}

                        <form onSubmit={handleSignup}>
                            {/* FULL NAME */}
                            <div className="input-group">
                                <label>Full Name</label>

                                <div className="input-box">
                                    <span>👤</span>
                                    <input
                                        type="text"
                                        placeholder="Jayraj Panchal"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
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
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* TERMS */}
                            <div className="terms">
                                <input
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                />
                                <p>
                                    I agree to the Terms & Conditions and Privacy Policy
                                </p>
                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="signup-btn"
                                disabled={loading}
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </form>

                        <div className="divider">Or continue with</div>

                        {/* SOCIAL BUTTONS */}
                        <div className="social-buttons">
                            <button type="button">Google</button>
                            <button type="button">Apple</button>
                        </div>

                        <p className="login-text">
                            Already have an account?{" "}
                            <span onClick={handleLoginClick} style={{ cursor: "pointer" }}>
                                Login
                            </span>
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

        .error-message {
          background: rgba(255, 67, 54, 0.1);
          border: 1px solid rgba(255, 67, 54, 0.3);
          color: #ff4336;
          padding: 12px 14px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 13px;
          display: flex;
          align-items: center;
        }

        .signup-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .signup-btn:disabled:hover {
          transform: none;
          box-shadow: none;
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