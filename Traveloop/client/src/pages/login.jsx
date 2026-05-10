import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { request } from "../lib/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const data = await request("/auth/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });

            const { token, user } = data;
            login(user, token);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message || "An error occurred during login");
        } finally {
            setLoading(false);
        }
    };

    const handleSignupClick = () => {
        navigate("/signup");
    };

    return (
        <>
            <div className="login-container">
                {/* LEFT SIDE */}
                <div className="left-panel">
                    <div className="overlay"></div>

                    <div className="brand">
                        <div className="logo">◉</div>
                        <span>Traveloop</span>
                    </div>

                    <div className="hero-content">
                        <h1>
                            Your Journey,
                            <br />
                            <span>Intelligently</span> Guided.
                        </h1>

                        <p>
                            Experience the future of exploration with the Expert
                            Navigator. Seamless logistics meet premium cinematic
                            discovery.
                        </p>
                    </div>

                    <div className="bottom-text">
                        CELESTIAL VOYAGER EDITION
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="right-panel">
                    <div className="login-box">
                        <h2>Welcome Back</h2>

                        <p className="subtitle">
                            Enter your credentials to access your dashboard.
                        </p>

                        {error && (
                            <div className="error-message">{error}</div>
                        )}

                        <form onSubmit={handleLogin}>
                            {/* EMAIL */}
                            <div className="input-group">
                                <label>Email Address</label>

                                <div className="input-box">
                                    <span>✉</span>
                                    <input
                                        type="email"
                                        placeholder="navigator@traveloop.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* PASSWORD */}
                            <div className="input-group">
                                <div className="password-label">
                                    <label>Password</label>
                                    <span className="forgot">Forgot Password?</span>
                                </div>

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

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="login-btn"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>

                        <div className="divider">Or continue with</div>

                        {/* SOCIAL */}
                        <div className="social-buttons">
                            <button type="button">Google</button>
                            <button type="button">Apple</button>
                        </div>

                        <p className="signup-text">
                            Don't have an account?{" "}
                            <span onClick={handleSignupClick} style={{ cursor: "pointer" }}>
                                Sign up
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

        .login-container {
          width: 100%;
          height: 100vh;
          display: flex;
          background: #050816;
        }

        /* LEFT PANEL */

        .left-panel {
          width: 60%;
          position: relative;
          background: linear-gradient(
              rgba(0, 0, 0, 0.55),
              rgba(0, 0, 0, 0.75)
            ),
            url("https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1974&auto=format&fit=crop");
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
            rgba(107, 72, 255, 0.25),
            rgba(0, 255, 255, 0.08)
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
          width: 38px;
          height: 38px;
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
          max-width: 520px;
        }

        .hero-content h1 {
          font-size: 64px;
          line-height: 1.1;
          color: white;
          margin-bottom: 24px;
          font-weight: 700;
        }

        .hero-content h1 span {
          color: #66d9ff;
        }

        .hero-content p {
          color: rgba(255,255,255,0.75);
          font-size: 18px;
          line-height: 1.7;
        }

        .bottom-text {
          position: relative;
          z-index: 2;
          color: rgba(255,255,255,0.4);
          font-size: 12px;
          letter-spacing: 3px;
        }

        /* RIGHT PANEL */

        .right-panel {
          width: 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #040b1d;
          padding: 40px;
        }

        .login-box {
          width: 100%;
          max-width: 420px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 40px;
          border-radius: 24px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 40px rgba(0,0,0,0.3);
        }

        .login-box h2 {
          color: white;
          font-size: 38px;
          margin-bottom: 10px;
        }

        .subtitle {
          color: rgba(255,255,255,0.6);
          margin-bottom: 35px;
          line-height: 1.6;
        }

        .input-group {
          margin-bottom: 24px;
        }

        .input-group label {
          display: block;
          color: rgba(255,255,255,0.8);
          margin-bottom: 10px;
          font-size: 14px;
        }

        .password-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .forgot {
          color: #8f7cff;
          font-size: 13px;
          cursor: pointer;
        }

        .input-box {
          height: 56px;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          display: flex;
          align-items: center;
          padding: 0 18px;
          gap: 12px;
        }

        .input-box span {
          color: rgba(255,255,255,0.5);
          font-size: 16px;
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

        .login-btn {
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
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 10px;
          transition: 0.3s;
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(95, 167, 255, 0.35);
        }

        .divider {
          text-align: center;
          color: rgba(255,255,255,0.45);
          margin: 28px 0;
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

        .signup-text {
          text-align: center;
          color: rgba(255,255,255,0.6);
          margin-top: 30px;
          font-size: 14px;
        }

        .signup-text span {
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

        .login-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .login-btn:disabled:hover {
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

          .login-box {
            max-width: 500px;
          }
        }

        @media (max-width: 600px) {
          .right-panel {
            padding: 20px;
          }

          .login-box {
            padding: 30px 20px;
          }

          .login-box h2 {
            font-size: 30px;
          }
        }
      `}</style>
        </>
    );
}
