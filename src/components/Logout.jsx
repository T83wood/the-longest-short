import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to logout. Please try again.");
    }
  };

  return (
    <button onClick={handleLogout} style={{ cursor: "pointer", padding: "10px", margin: "10px" }}>
      Logout
    </button>
  );
};

export default Logout;

