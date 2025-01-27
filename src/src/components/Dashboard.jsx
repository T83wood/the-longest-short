import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to the Dashboard</h1>
        <nav>
          <a href="/logout">Logout</a>
          <a href="/dashboard">Dashboard Home</a>
        </nav>
      </header>
      <div className="dashboard-main">
        <aside className="dashboard-sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li><a href="#">User Info</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </aside>
        <section className="dashboard-content">
          <h2>Trading Tools</h2>
          <div className="widgets">
            <div className="widget">
              <h3>Market Chart</h3>
              <p>Embed your charting tools here.</p>
            </div>
            <div className="widget">
              <h3>Order Book</h3>
              <p>Real-time order data here.</p>
            </div>
          </div>
        </section>
        <aside className="dashboard-trading-panel">
          <h2>Trading Panel</h2>
          <p>Order placement and details.</p>
        </aside>
      </div>
      <footer className="dashboard-footer">
        &copy; 2025 The Longest Short
      </footer>
    </div>
  );
};

export default Dashboard;


