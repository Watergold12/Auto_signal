import { useNavigate } from "react-router-dom";
import data from "../data/dashboardData.json";
import "./OrderPlaced.css";

function OrderPlaced() {
    const navigate = useNavigate();
    const orderData = data.orderPlaced;

    const handleViewOrders = () => {
        navigate("/dashboard");
    };

    return (
        <div className="order-placed-page">
            <div className="order-placed-card">
                <h2 className="card-title">Order Status</h2>

                <div className="success-container">
                    <div className="success-icon">✓</div>
                    <h3 className="success-message">{orderData.statusMessage}</h3>
                    <p className="success-subtext">Your order has been placed via broker API.</p>
                </div>

                <div className="order-details">
                    <div className="order-info-row">
                        <span className="info-label">Order ID</span>
                        <span className="info-value">{orderData.orderId}</span>
                    </div>

                    <div className="order-info-row">
                        <span className="info-label">Instrument</span>
                        <span className="info-value">{orderData.instrument}</span>
                    </div>

                    <div className="order-info-row">
                        <span className="info-label">Type</span>
                        <span className="info-value">{orderData.type}</span>
                    </div>

                    <div className="order-info-row">
                        <span className="info-label">Qty</span>
                        <span className="info-value">{orderData.quantity}</span>
                    </div>

                    <div className="order-info-row">
                        <span className="info-label">Order Type</span>
                        <span className="info-value">{orderData.orderType}</span>
                    </div>

                    <div className="order-info-row">
                        <span className="info-label">Status</span>
                        <span className="info-value status-complete">{orderData.status}</span>
                    </div>

                    <div className="order-info-row">
                        <span className="info-label">Time</span>
                        <span className="info-value">{orderData.time}</span>
                    </div>
                </div>

                <button className="view-orders-btn" onClick={handleViewOrders}>
                    View Orders
                </button>

                <div className="nav-tabs">
                    <button className="nav-tab active">Home</button>
                    <button className="nav-tab">Signals</button>
                    <button className="nav-tab">Orders</button>
                    <button className="nav-tab">Positions</button>
                    <button className="nav-tab">More</button>
                </div>
            </div>
        </div>
    );
}

export default OrderPlaced;
