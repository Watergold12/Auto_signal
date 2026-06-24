import "./BrokerLogin.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function BrokerLogin() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    console.log("Clicked");
    navigate("/login");
  };

  return (
    <div className="broker-page">
      <div className="broker-login-panel">
        <div className="broker-intro">
          <span className="broker-overline">Secure broker connection</span>
          <h1 className="broker-title">Connect your broker</h1>
          <p className="broker-subtitle">Select your broker account to enable order execution for your automated signals.</p>
        </div>
        <button className="broker-card" onClick={handleLoginClick}>
          <span className="broker-logo"><img src={logo} alt="" /></span>
          <span className="broker-name"><strong>Trade Smart</strong><small>Secure API connection</small></span>
          <span className="broker-arrow">Continue</span>
        </button>
        <p className="broker-footer">Your credentials are entered directly with your broker. AutoSignal never stores them.</p>
      </div>
    </div>
  );
}

export default BrokerLogin;
