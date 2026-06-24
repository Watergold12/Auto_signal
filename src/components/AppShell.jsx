import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./AppShell.css";

const navigation = [
  { label: "Overview", path: "/dashboard", icon: "OV" },
  { label: "Signals", path: "/signal", icon: "SG" },
  { label: "Orders", path: "/order-placed", icon: "OR" },
  { label: "Positions", path: "/dashboard", icon: "PS" },
];

function AppShell({ children, eyebrow, title, actions }) {
  const location = useLocation();
  const activePath =
    location.pathname === "/signal-details" || location.pathname === "/confirm-order"
      ? "/signal"
      : location.pathname;

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Link className="brand" to="/dashboard">
          <span className="brand-mark">
            <img src={logo} alt="" />
          </span>
          <span>
            <strong>AutoSignal</strong>
            <small>Trade workspace</small>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          <p className="nav-label">Workspace</p>
          {navigation.map((item) => (
            <Link
              className={`nav-link ${activePath === item.path ? "is-active" : ""}`}
              to={item.path}
              key={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="broker-indicator">
            <span className="broker-dot" />
            <span>
              <small>Broker connection</small>
              <strong>Trade Smart</strong>
            </span>
          </div>
          <button className="support-link" type="button">Support center</button>
          <Link className="sign-out" to="/">Sign out</Link>
        </div>
      </aside>

      <main className="app-main">
        <header className="app-topbar">
          <div>
            {eyebrow && <p className="page-eyebrow">{eyebrow}</p>}
            <h1>{title}</h1>
          </div>
          <div className="topbar-actions">
            {actions}
            <button className="icon-button" type="button" aria-label="Notifications">
              <span aria-hidden="true">N</span>
              <i />
            </button>
            <button className="profile-button" type="button" aria-label="Open profile">
              AS
            </button>
          </div>
        </header>
        <div className="app-content">{children}</div>
      </main>
    </div>
  );
}

export default AppShell;
