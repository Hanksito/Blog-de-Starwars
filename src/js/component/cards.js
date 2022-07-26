import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { Context } from "../store/appContext";

export const Card = ({name, id ,url,type}) => {
  const { store, actions } = useContext(Context);
  return (
    <div key={id} className="col-2 rounded">
      <div className="card" style={{ width: "16rem" }}>
        <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center  font-weight-bold border border-dark">{name}</h5>
        </div>
        <div className="card-body">
          <Link to={`/${type}/${name}/${id}`}>
            <button onClick={()=>actions.getid(url)}  type="button"  className="btn btn-outline-primary btn-sm">
              Saber mas
            </button>
          </Link>
          <button  type="button" onClick={()=>{actions.addFavorites(name)}} className="btn btn-outline-dark btn-sm float-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-chat-square-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
