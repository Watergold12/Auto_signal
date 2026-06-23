import data from "../data/dashboardData.json";
// import commonservice from service;
import { useNavigate } from "react-router-dom";
import "./SignalPage.css";

function SignalPage() {

    const navigate = useNavigate();
    
    return (
        <div className="signal-page">
            <h1 className="signal-title">Today's Signal</h1>
            <div className="signal-card">
                <div className="signal-header">
                    <h2 className="signal-title">NIFTY 50</h2>
                    <span className="buy-badge">
                        BUY
                    </span>
                </div>

                <h3 className="signal-price">{data.signal.price}</h3>
                <div className="graph-placeholder">
                    Graph Area
                </div>

                <div className="signal-details">
                    <div className="detail-row">
                        <span>Entry Price</span>
                        <span>{data.signal.entryPrice}</span>
                    </div>
                    <div className="detail-row">
                        <span>Target 1</span>
                        <span>{data.signal.target1}</span>
                    </div>
                    <div className="detail-row">
                        <span>Target 2</span>
                        <span>{data.signal.target2}</span>
                    </div>
                    <div className="detail-row">
                        <span>Stop Loss</span>
                        <span>{data.signal.stopLoss}</span>
                    </div>
                    <div className="detail-row">
                        <span>Confidence</span>
                        <span>{data.signal.confidence}</span>
                    </div>
                    
                </div>
            </div>
            <button onClick={() => navigate("/signal-details")}>
                View & Place Order
            </button>
        </div>
    );
}

export default SignalPage;