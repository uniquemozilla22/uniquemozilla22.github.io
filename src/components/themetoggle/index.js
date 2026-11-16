import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import "./style.css";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button type="button" className="icon-btn theme-toggle" onClick={themetoggle} aria-label="Toggle color theme">
      <WiMoonAltWaningCrescent4 aria-hidden="true" />
    </button>
  );
};

export default Themetoggle;
