import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/mlang1988"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mona Lang
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/mlang1988/weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced
        </a>{" "}
        on GitHub.
      </footer>
    </div>
  );
}
