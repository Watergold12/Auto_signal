import "./WelcomePage.css";
import logo from "../assets/logo.png";

function WelcomePage() {
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

            <button className="start-button">
                Get Started
            </button>
        </div>
    );
}

export default WelcomePage;