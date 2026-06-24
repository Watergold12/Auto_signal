import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import data from "../data/dashboardData.json";
import "./OrderPlaced.css";

function OrderPlaced() {
  const orderData = data.orderPlaced;

  return (
    <AppShell eyebrow="Orders" title="Order submitted">
      <div className="order-placed-page">
        <section className="order-placed-card">
          <div className="success-icon">OK</div>
          <p className="order-state">Order status</p>
          <h2>{orderData.statusMessage}</h2>
          <p className="success-subtext">The order has been sent to your broker and is now complete.</p>
          <span className="complete-badge">{orderData.status}</span>

          <div className="placed-order-details">
            <div><span>Order ID</span><strong>{orderData.orderId}</strong></div>
            <div><span>Instrument</span><strong>{orderData.instrument}</strong></div>
            <div><span>Type</span><strong>{orderData.type}</strong></div>
            <div><span>Quantity</span><strong>{orderData.quantity}</strong></div>
            <div><span>Order type</span><strong>{orderData.orderType}</strong></div>
            <div><span>Placed at</span><strong>{orderData.time}</strong></div>
          </div>

          <div className="success-actions">
            <Link className="view-orders-btn" to="/dashboard">Back to dashboard</Link>
            <Link className="new-signal-link" to="/signal">View market signals</Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

export default OrderPlaced;
