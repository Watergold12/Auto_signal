import "./Dashboard.css";
import dashboardData from "../data/dashboardData.json";

function Dashboard() {
  return (
    <div className="dashboard-page">

        {/* Header */}
        <div className="dashboard-header">
          <span className="menu-icon">☰</span>
          <h2>Trade Smart Dashboard</h2>
          <span className="bell-icon">🔔</span>
        </div>

        {/* Top Cards Grid */}
        <div className="cards-grid">

          {/* Broker Card */}
          <div className="broker-card">
            <div className="broker-left">
              <div className="broker-logo">📈</div>

              <div>
                <p className="broker-label">
                  Broker Connected
                </p>

                <h4>
                  {dashboardData.broker.name}
                </h4>
              </div>
            </div>

            <div className="active-badge">
              {dashboardData.broker.status}
            </div>
          </div>

          {/* Overview Card */}
          <div className="overview-card">
            <div className="overview-item">
              <p>Equity</p>

              <h2>
                {dashboardData.accountOverview.equity}
              </h2>
            </div>

            <div className="overview-item">
              <p>Available Margin</p>

              <h2>
                {dashboardData.accountOverview.availableMargin}
              </h2>
            </div>
          </div>

          {/* Performance Card */}
          <div className="performance-card">
            <h4>Today's Performance</h4>

            <p className="performance-label">
              P&L
            </p>

            <div className="profit-box">
              {dashboardData.performance.pnl}
              {" "}
              ({dashboardData.performance.percentage})
            </div>
          </div>

        </div>

        {/* Auto Trading Card */}
        <div className="auto-card">

          <div className="auto-header">
            <h4>Auto Trading</h4>
          </div>

          <div className="auto-row">
            <span>Status</span>

            <div className="toggle-wrapper">
              <span>
                {dashboardData.autoTrading.status}
              </span>

              <label className="switch">
                <input
                  type="checkbox"
                  checked
                  readOnly
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="auto-row">
            <span>Last Updated</span>

            <span>
              {dashboardData.autoTrading.lastUpdated}
            </span>
          </div>

        </div>

    </div>
  );
}

export default Dashboard;