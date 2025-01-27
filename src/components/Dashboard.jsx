import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to the Dashboard</h1>
        <nav>
          <a href="/logout" className="dashboard-link">Logout</a>
          <a href="/dashboard" className="dashboard-link">Dashboard Home</a>
        </nav>
      </header>
      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          <h2>Sidebar</h2>
          <p>Links or other navigation items</p>
        </aside>
        <main className="dashboard-main">
          <h2>Main Content</h2>
          <p>This is where the primary content will go.</p>
        </main>
        <aside className="dashboard-trading-panel">
          <h2>Trading Panel</h2>
          <p>Order placement and details</p>
        </aside>
      </div>
      <footer className="dashboard-footer">
        <p>&copy; 2025 The Longest Short</p>
      </footer>
    </div>
  );
};

export default Dashboard;

