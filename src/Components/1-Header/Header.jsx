import React, { useEffect, useState } from "react";
// @ts-ignore
import "./Header.css";
const Header = () => {
  const [ShowModel, setShowModel] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem("mode") ?? "dark");
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <div>
        <button
          className="headIcon icon-menu"
          onClick={() => {
            setShowModel(true);
          }}
        >
          {" "}
        </button>
      </div>
      <nav>
        <ul className="flex">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Article">Article</a>
          </li>
          <li>
            <a href="#Project">Project</a>
          </li>

          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem("mode", theme === "dark" ? "light " : "dark");
          ///////////////////
          // @ts-ignore
          settheme(localStorage.getItem("mode"));
        }}
        className="Mode"
      >
        {theme === "dark" ? (
          <span className="icon-sun"></span>
        ) : (
          <span className="icon-moon-stroke"></span>
        )}
      </button>

      {ShowModel && (
        <div className="fixed">
          <ul className="model">
            <button
              className="cancelModel icon-clear"
              onClick={() => {
                setShowModel(false);
              }}
            ></button>
            <li>
              <a onClick={() => setShowModel(false)} href="#About">
                About
              </a>
            </li>
            <li>
              <a onClick={() => setShowModel(false)} href="#Artical">
                Artical
              </a>
            </li>
            <li>
              <a onClick={() => setShowModel(false)} href="#Project">
                Project
              </a>
            </li>

            <li>
              <a onClick={() => setShowModel(false)} href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
