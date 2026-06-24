import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";
import "./Dashboard.css";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const result = await getDashboardData();
      setData(result);
    };

    loadData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    broker,
    accountOverview,
    performance,
    autoTrading,
    signal,
  } = data;

  return (
    <AppShell
      eyebrow="Tuesday, 24 June 2026"
      title="Good morning, trader"
      actions={<Link className="primary-button" to="/signal">View live signals</Link>}
    >
      <section className="dashboard-grid">
        <article className="portfolio-card">
          <div className="card-heading">
            <div>
              <p>Portfolio value</p>
              <h2>{accountOverview.equity}</h2>
            </div>
            <span className="change-pill">{performance.percentage}</span>
          </div>
          <div className="portfolio-chart" aria-label="Portfolio growth chart">
            <svg viewBox="0 0 620 150" preserveAspectRatio="none" role="img">
              <defs>
                <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7af0b0" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7af0b0" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="chart-area" d="M0,132 C38,114 44,118 75,105 C110,92 118,114 156,92 C190,71 214,91 245,68 C284,39 306,73 340,59 C374,44 402,64 436,41 C471,17 500,43 532,30 C568,17 589,33 620,11 L620,150 L0,150 Z" />
              <path className="chart-line" d="M0,132 C38,114 44,118 75,105 C110,92 118,114 156,92 C190,71 214,91 245,68 C284,39 306,73 340,59 C374,44 402,64 436,41 C471,17 500,43 532,30 C568,17 589,33 620,11" />
            </svg>
          </div>
          <div className="chart-footer">
            <span>Today&apos;s P&amp;L</span>
            <strong>{performance.pnl}</strong>
            <span>Last refreshed {autoTrading.lastUpdated}</span>
          </div>
        </article>

        <article className="account-card">
          <div className="card-heading">
            <div>
              <p>Connected broker</p>
              <h3>{broker.name}</h3>
            </div>
            <span className="status-pill"><i /> {broker.status}</span>
          </div>
          <dl className="account-list">
            <div>
              <dt>Available margin</dt>
              <dd>{accountOverview.availableMargin}</dd>
            </div>
            <div>
              <dt>Auto trading</dt>
              <dd className="auto-status">{autoTrading.status}<span className="static-switch"><i /></span></dd>
            </div>
          </dl>
        </article>

        <section className="market-panel">
          <div className="section-title">
            <div>
              <p className="section-kicker">Signal desk</p>
              <h2>Market signals</h2>
            </div>
            <Link to="/signal">All signals</Link>
          </div>
          <div className="signal-table">
            <div className="signal-table-head">
              <span>Instrument</span><span>Signal</span><span>Last price</span><span>Confidence</span><span />
            </div>
            <div className="signal-table-row">
              <div><strong>{signal.symbol}</strong><small>Index · Intraday</small></div>
              <span className="buy-badge">{signal.action}</span>
              <strong>{signal.price}</strong>
              <span className="confidence"><i><b /></i>{signal.confidence}</span>
              <Link to="/signal-details" className="row-action">Review</Link>
            </div>
          </div>
        </section>

        <section className="activity-panel">
          <div className="section-title">
            <div>
              <p className="section-kicker">Execution</p>
              <h2>Today&apos;s activity</h2>
            </div>
          </div>
          <div className="activity-summary">
            <div><strong>01</strong><span>Signal generated</span></div>
            <div><strong>00</strong><span>Orders placed</span></div>
            <div><strong>00</strong><span>Open positions</span></div>
          </div>
          <div className="activity-note"><span className="pulse" /> Monitoring the market for the next qualifying setup.</div>
        </section>
      </section>
    </AppShell>
  );
}

export default Dashboard;
