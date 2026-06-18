import "./BrokerLogin.css";
import { useNavigate } from "react-router-dom";

function BrokerLogin() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    console.log("Clicked");
    navigate("/login");
  };

  return (
    <div className="broker-page">
      <h1 className="broker-title">Broker Login</h1>

      <p className="broker-subtitle">
        Login to your broker account
        <br />
        to connect and trade
      </p>

      <div
        className="broker-card"
        onClick={handleLoginClick}
      >
        <img
          src="https://www.tradesmartonline.in/images/logo.png"
          alt="TradeSmart Logo"
          className="broker-logo"
        />
      </div>

      <p className="broker-footer">
        We never store your credentials.
        <br />
        Secure API integration via broker.
      </p>
    </div>
  );
}

export default BrokerLogin;