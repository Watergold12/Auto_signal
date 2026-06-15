import "./WelcomePage.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
    
    const navigate = useNavigate();

    return (
        <div className="welcome-page">
            <div className="logo-container">
                <img src={logo} alt=" Logo"></img>
            </div>
            <h1 className="app-title">
                Auto Signal
            </h1>
            
            <p className="tagline">
                Smarter Signals, Better Trades
            </p>

            <div className="dots">
                <span className="dot active-dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <button 
                className="start-button"
                onClick={() => navigate("/broker-login")}>
                Get Started
            </button>
        </div>
    );
}

export default WelcomePage;