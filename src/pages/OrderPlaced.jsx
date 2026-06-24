import { Link, useLocation } from "react-router-dom";
import AppShell from "../components/AppShell";
import data from "../data/dashboardData.json";
import "./OrderPlaced.css";

function OrderPlaced() {
  const location = useLocation();

  const orderData =
    location.state || data.orderPlaced;

  return (
    <AppShell
      eyebrow="Orders"
      title="Order submitted"
    >
      <div className="order-placed-page">
        <section className="order-placed-card">
          <div className="success-icon">
            OK
          </div>

          <p className="order-state">
            Order status
          </p>

          <h2>
            Order placed successfully
          </h2>

          <p className="success-subtext">
            The order has been sent to your
            broker and is now complete.
          </p>

          <span className="complete-badge">
            COMPLETED
          </span>

          <div className="placed-order-details">
            <div>
              <span>Order ID</span>
              <strong>
                ORD{Date.now()}
              </strong>
            </div>

            <div>
              <span>Instrument</span>
              <strong>
                {orderData.symbol}
              </strong>
            </div>

            <div>
              <span>Type</span>
              <strong>
                {orderData.action}
              </strong>
            </div>

            <div>
              <span>Quantity</span>
              <strong>
                {orderData.quantity}
              </strong>
            </div>

            <div>
              <span>Order Type</span>
              <strong>
                {orderData.orderType}
              </strong>
            </div>

            <div>
              <span>Product</span>
              <strong>
                {orderData.product}
              </strong>
            </div>

            <div>
              <span>Entry Price</span>
              <strong>
                {orderData.entryPrice}
              </strong>
            </div>

            <div>
              <span>Total Value</span>
              <strong>
                {orderData.totalAmount}
              </strong>
            </div>

            <div>
              <span>Placed At</span>
              <strong>
                {new Date().toLocaleTimeString()}
              </strong>
            </div>
          </div>

          <div className="success-actions">
            <Link
              className="view-orders-btn"
              to="/dashboard"
            >
              Back to Dashboard
            </Link>

            <Link
              className="new-signal-link"
              to="/signal"
            >
              View Market Signals
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

export default OrderPlaced;