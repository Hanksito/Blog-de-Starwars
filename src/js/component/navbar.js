import { element } from "prop-types";
import React, { useContext } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let fav = store.favorites;
  let vacio = '(empty)';
  return (
    <nav className="navbar navbar-dark bg-dark mb-3 d-flex justify-content-between pe-5 sticky-top">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 px-5">
          <img
            id="logo"
            src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG28.png"
            onClick={()=>actions.loadSomeData()}
          />
        </span>
      </Link>

      <div onClick={(e)=>e.stopPropagation()} className="dropdown ml-auto">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="bg-secondary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{(store.favorites.length==0)?
							<li><span className="dropdown-item" href="#">{vacio}</span></li>
							: store.favorites.map((item)=>
							<li key={item.name + item.uid} className="d-flex justify-content-between pe-3">
								<Link to={`/${item.src}/${item.name}/${item.uid}`}>
									<span onClick={()=>{
                      actions.resetSingles();
                      actions.getid(item.url);
                      }
                    }
                    className="dropdown-item text-primary" href="#">{item.name}</span>
								</Link>
								<span className="text-primary" onClick={()=>actions.deleteFav(item)} ><FaRegTrashAlt /></span>
							</li>)}
					</ul>
      </div>
    </nav>
  );
};
