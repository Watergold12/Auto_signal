import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Login Successful!");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo-section">
          <h1 className="brand-name">Trade Smart</h1>
          <p className="tagline">
            Trade Smarter. Invest Better.
          </p>
        </div>

        <h2 className="title">Login to Trade Smart</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>User ID</label>
            <input
              type="text"
              name="userId"
              placeholder="Enter User ID"
              value={formData.userId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>
        </form>

        <a href="/" className="forgot-link">
          Forgot User ID or Password?
        </a>

        <div className="footer">
          🔒 Secure Trading Platform
        </div>
      </div>
    </div>
  );
}

export default LoginPage;