import { element } from "prop-types";
import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let fav = store.favorites;
  return (
    <nav className="navbar navbar-dark bg-dark mb-3 d-flex justify-content-around">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 px-5">
          <img
            id="logo"
            src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG28.png"
          />
        </span>
      </Link>

      <div class="dropdown">
        <button class="dropbtn">Favorites</button>
        <div class="dropdown-content pe-5">
          <ul className="list-group">
            {fav.map((element, index) => {
              return (
                <li className="row justify-content-center" key={index}>
                  {element}
                  <button
                    type="button"
                    className="btn-close me-2"
                    aria-label="Close"
                    onClick={() => actions.delFavorites({ element })}
                  ></button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
