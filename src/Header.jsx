import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <form>
        <input
          type="search"
          className="search-input"
          placeholder="Enter a city"
          required
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </header>
  );
}
