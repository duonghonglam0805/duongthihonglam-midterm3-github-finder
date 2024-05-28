import React from "react";
import { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme === "light" ? "bg-light " : "bg-dark";
  }, [theme]);

  const handleClick = (e) => {
    e.preventDefault();
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <li>
          <CiLight onClick={handleClick} />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
