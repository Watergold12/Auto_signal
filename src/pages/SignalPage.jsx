import { Link, useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";
import data from "../data/dashboardData.json";
import graph from "../assets/stock.png";
import "./SignalPage.css";

function SignalPage() {
  const navigate = useNavigate();
  const { signal } = data;

  return (
    <AppShell
      eyebrow="Signal desk"
      title="Today’s market signals"
      actions={<button className="secondary-button" type="button">Last 30 minutes</button>}
    >
      <div className="signal-page">
        <section className="signal-page-intro">
          <div>
            <p>Automated research, ready for review</p>
            <span>Signals are continuously scored against your selected intraday strategy.</span>
          </div>
          <span className="live-label"><i /> Market open</span>
        </section>

        <section className="signal-workspace">
          <article className="featured-signal">
            <div className="featured-signal-head">
              <div>
                <div className="instrument-line">
                  <span className="market-tag">INDEX</span>
                  <span className="buy-badge">{signal.action}</span>
                </div>
                <h2>{signal.symbol}</h2>
                <p>Intraday momentum setup</p>
              </div>
              <div className="signal-quote">
                <strong>{signal.price}</strong>
                <span>+186.40 <b>(+0.84%)</b></span>
              </div>
            </div>

            <div className="signal-chart-wrap">
              <div className="chart-key"><span /> Live price movement</div>
              <img src={graph} alt={`${signal.symbol} intraday market movement`} />
            </div>

            <div className="signal-stats">
              <div><span>Entry price</span><strong>{signal.entryPrice}</strong></div>
              <div><span>Target 1</span><strong>{signal.target1}</strong></div>
              <div><span>Target 2</span><strong>{signal.target2}</strong></div>
              <div className="risk-value"><span>Stop loss</span><strong>{signal.stopLoss}</strong></div>
            </div>
          </article>

          <aside className="signal-summary">
            <div className="summary-heading">
              <div>
                <p>Signal quality</p>
                <h3>High conviction</h3>
              </div>
              <div className="score-ring"><strong>85</strong><span>%</span></div>
            </div>
            <div className="quality-meter"><i /></div>
            <p className="summary-copy">Price and volume are aligned with the current directional momentum.</p>
            <div className="summary-rule" />
            <dl>
              <div><dt>Holding period</dt><dd>Intraday</dd></div>
              <div><dt>Risk profile</dt><dd>Moderate</dd></div>
              <div><dt>Generated</dt><dd>10:25 AM</dd></div>
            </dl>
            <button className="review-button" onClick={() => navigate("/signal-details")}>Review &amp; place order</button>
            <Link className="watch-link" to="/dashboard">Add to watchlist</Link>
          </aside>
        </section>

        <section className="signal-list-panel">
          <div className="section-title">
            <div>
              <p className="section-kicker">More opportunities</p>
              <h2>Signal history</h2>
            </div>
            <button className="filter-button" type="button">Filter signals</button>
          </div>
          <div className="empty-signal-state">
            <strong>Scanning the market</strong>
            <span>New qualifying signals will appear here as they are generated.</span>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

export default SignalPage;
