import React, { useState } from "react";
import "./TopRightMenu.css";

const TopRightMenu = ({ toggleTheme, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeDark, setIsThemeDark] = useState(true);

  const handleToggleTheme = () => {
    setIsThemeDark(!isThemeDark);
    toggleTheme(isThemeDark ? "light" : "dark");
  };

  return (
    <div className="top-right-menu">
      <button
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      {isMenuOpen && (
        <div className="menu-dropdown">
          <div className="menu-item" onClick={handleToggleTheme}>
            <span>Theme</span>
            <div className={`toggle-switch ${isThemeDark ? "dark" : "light"}`}>
              <div className="switch-handle" />
            </div>
          </div>
          <div className="menu-item" onClick={logout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default TopRightMenu;

