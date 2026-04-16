import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Project">Project</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <p>© 2026 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
