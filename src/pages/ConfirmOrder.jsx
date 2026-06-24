import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";
import data from "../data/dashboardData.json";
import "./ConfirmOrder.css";

function ConfirmOrder() {
  const navigate = useNavigate();
  const orderData = data.orderConfirmation;

  return (
    <AppShell eyebrow="Signal desk / NIFTY 50 / Review" title="Confirm your order">
      <div className="confirm-order-page">
        <section className="confirmation-layout">
          <article className="confirmation-card">
            <div className="confirmation-card-head">
              <div>
                <p>Review details before submitting</p>
                <h2>{orderData.symbol}</h2>
                <span>Intraday market order</span>
              </div>
              <span className="action-badge">{orderData.action}</span>
            </div>

            <div className="confirmation-grid">
              <div><span>Quantity</span><strong>{orderData.quantity}</strong></div>
              <div><span>Product</span><strong>{orderData.product}</strong></div>
              <div><span>Order type</span><strong>{orderData.orderType}</strong></div>
              <div><span>Entry price (est.)</span><strong>{orderData.entryPrice}</strong></div>
            </div>

            <div className="order-total">
              <span>Estimated order value</span>
              <strong>{orderData.totalAmount}</strong>
            </div>
          </article>

          <aside className="submit-panel">
            <div className="submit-icon">OK</div>
            <h2>Ready to send</h2>
            <p>This order will be placed with Trade Smart using your connected broker session.</p>
            <div className="submit-details">
              <span>Broker connection</span>
              <strong><i /> Active and secure</strong>
            </div>
            <button className="confirm-btn" onClick={() => navigate("/order-placed")}>Confirm &amp; place order</button>
            <button className="cancel-btn" onClick={() => navigate("/signal-details")}>Back to order ticket</button>
          </aside>
        </section>
      </div>
    </AppShell>
  );
}

export default ConfirmOrder;
