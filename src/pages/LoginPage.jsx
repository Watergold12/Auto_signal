import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

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

    console.log("User ID:", formData.userId);
    console.log("Password:", formData.password);

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Left Side */}
        <div className="logo-section">
          <h1 className="brand-name">Trade Smart</h1>

          <p className="tagline">
            Trade Smarter. Invest Better.
          </p>

          <div className="footer">
            Secure Trading Platform
          </div>
        </div>

        {/* Right Side */}
        <div className="login-form-section">

          <h2 className="title">
            Login to Trade Smart
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>User ID</label>

              <input
                type="text"
                name="userId"
                placeholder="Enter User ID"
                value={formData.userId}
                onChange={handleChange}
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
                />

                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
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

        </div>

      </div>
    </div>
  );
}

export default LoginPage;