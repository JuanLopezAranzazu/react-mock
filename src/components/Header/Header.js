import React from "react";
import "./Header.css";

const Header = ({ setSearch, selected, handleClick }) => {
  return (
    <div className="search">
      <div className="content-search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
        />
        {selected && (
          <button className="btn btn-primary" onClick={handleClick}>
            {selected ? "Selected All" : "No selected"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
