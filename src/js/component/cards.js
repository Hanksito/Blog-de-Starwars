import React from "react";
import {Link} from "react-router-dom"

export const Card = ({ img, name, id ,type}) => {
  return (
    <div key={id} className="col-2 rounded">
      <div className="card" style={{ width: "16rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center  font-weight-bold border border-dark">{name}</h5>
        </div>
        <div className="card-body">
          <Link to={`/card/${id}`}>
          <button href="#" type="button"  className="btn btn-primary btn-sm">
            Saber mas
          </button>
          </Link>
          <button  type="button" className="btn btn-sm float-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-chat-square-heart-fill"
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
