// src/Menu.jsx
import React from "react";

function Menu() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Menu;