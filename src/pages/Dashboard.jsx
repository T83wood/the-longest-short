import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [dropdownSelection, setDropdownSelection] = useState("Trading");
  const [tabs, setTabs] = useState(["Overview", "Markets", "Positions"]);
  const [theme, setTheme] = useState("light");
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const handleDropdownChange = (selection) => {
    setDropdownSelection(selection);
    switch (selection) {
      case "Trading":
        setTabs(["Overview", "Markets", "Positions"]);
        break;
      case "Account":
        setTabs(["Profile", "Settings", "Security"]);
        break;
      case "Reports":
        setTabs(["Performance", "History", "Analytics"]);
        break;
      default:
        setTabs([]);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.className = theme === "light" ? "dark-theme" : "light-theme";
  };

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className={`dashboard ${theme}-theme`}>
      <header className="dashboard-header">
        {/* Left Dropdown Menu */}
        <div className="dropdown-container">
          <button className="dropdown-button">
            {dropdownSelection}
          </button>
          <div className="dropdown-menu">
            <div onClick={() => handleDropdownChange("Trading")}>Trading</div>
            <div onClick={() => handleDropdownChange("Account")}>Account</div>
            <div onClick={() => handleDropdownChange("Reports")}>Reports</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button key={tab} className="tab">
              {tab}
            </button>
          ))}
        </div>

        {/* Right Dropdown Menu */}
        <div className="account-dropdown-container">
          <button
            className="dropdown-button account-button"
            onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
          >
            Account
          </button>
          {accountDropdownOpen && (
            <div className="dropdown-menu account-menu">
              <div onClick={() => alert("Open Preferences")}>Preferences</div>
              <div onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </div>
              <div onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      </header>

      <main className="dashboard-content">
        <h2>{dropdownSelection} Dashboard</h2>
      </main>
    </div>
  );
};

export default Dashboard;




