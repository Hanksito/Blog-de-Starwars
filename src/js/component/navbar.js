import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 px-5">
          <img
            id="logo"
            src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG28.png"
          />
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle px-5 mx-5"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul className="dropdown-menu">
              <li>
                
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
