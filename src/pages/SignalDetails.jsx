import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";
import data from "../data/dashboardData.json";
import graph from "../assets/stock.png";
import "./SignalDetails.css";

function SignalDetails() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(data.orderConfirmation.quantity);
  const { signal } = data;

  return (
    <AppShell eyebrow="Signal desk / NIFTY 50" title="Review signal" actions={<span className="review-status"><i /> Live quote</span>}>
      <div className="details-page">
        <section className="details-layout">
          <article className="details-card">
            <div className="details-card-header">
              <div>
                <div className="instrument-line"><span className="market-tag">INDEX</span><span className="buy-badge">{signal.action}</span></div>
                <h2>{signal.symbol}</h2>
                <p>Generated at 10:25 AM · Intraday strategy</p>
              </div>
              <div className="details-price"><strong>{signal.price}</strong><span>+0.84% today</span></div>
            </div>
            <div className="details-chart"><img src={graph} alt={`${signal.symbol} chart`} /></div>
            <div className="plan-table">
              <div><span>Entry price</span><strong>{signal.entryPrice}</strong></div>
              <div><span>Target 1</span><strong>{signal.target1}</strong></div>
              <div><span>Target 2</span><strong>{signal.target2}</strong></div>
              <div className="loss"><span>Stop loss</span><strong>{signal.stopLoss}</strong></div>
            </div>
            <div className="trade-rationale">
              <strong>Why this signal</strong>
              <p>Momentum is holding above the intraday support level and price has confirmed a volume-backed breakout.</p>
            </div>
          </article>

          <aside className="order-ticket">
            <div className="ticket-heading">
              <div><p>Order ticket</p><h2>Place a trade</h2></div>
              <span className="buy-badge">{signal.action}</span>
            </div>
            <div className="ticket-instrument"><strong>{signal.symbol}</strong><span>Market order</span></div>
            <label className="ticket-field">
              <span>Quantity</span>
              <div className="stepper">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">-</button>
                <strong>{quantity}</strong>
                <button type="button" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">+</button>
              </div>
            </label>
            <label className="ticket-field">
              <span>Product</span>
              <select defaultValue={data.orderConfirmation.product}><option>MIS</option><option>CNC</option></select>
            </label>
            <label className="ticket-field">
              <span>Order type</span>
              <select defaultValue={data.orderConfirmation.orderType}><option>MARKET</option><option>LIMIT</option></select>
            </label>
            <div className="ticket-total"><span>Estimated order value</span><strong>{data.orderConfirmation.totalAmount}</strong></div>
            <div className="ticket-note">Your order is sent securely to your connected broker account.</div>
            <button className="place-order-btn" onClick={() => navigate("/confirm-order")}>Continue to review</button>
          </aside>
        </section>
      </div>
    </AppShell>
  );
}

export default SignalDetails;
