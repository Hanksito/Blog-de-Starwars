import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const SingleData = () => {
  const { store, actions } = useContext(Context);
  const aux = store.data;

  let params = useParams() 

  return (
    <div className="container-fluid">
      <div className="container bg-white rounded">
        <div className="row">
          <div className="col">
          
            <img
              id="singleData"
              
              src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
            />
            
          </div>
          <div className="col">
            <h1 className="text-center pt-5 mt-5 ">{aux.name}</h1>
            <div>
              <p className="fs-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus fugiat odio voluptate eum iusto repudiandae provident
                consequuntur nulla dolorem quaerat et eaque ea culpa nihil
                necessitatibus quas consequatur, repellendus amet.
              </p>
            </div>
          </div>
        </div>
        <hr style={{ color: "red" }} />
        <div className="row d-flex justify-content-center">
          <div className="col-2 text-center border">
            <h1>height</h1>
            <p className="fs-3">{aux.height}</p>
          </div>
          <div className="col-2 text-center border">
            <h1>hair_color</h1>
            <p className="fs-3">{aux.hair_color}</p>
          </div>
          <div className="col-2 text-center border">
            <h1>eye_color</h1>
            <p className="fs-3">{aux.eye_color}</p>
          </div>
          <div className="col-2 text-center border">
            <h1>skin_color</h1>
            <p className="fs-3">{aux.skin_color}</p>
          </div>
          <div className="col-2 text-center border">
            <h1>gender</h1>
            <p className="fs-3">{aux.gender}</p>
          </div>
        </div>
        <br />
		<div className="d-grid gap-2">
        <Link className="d-grid gap-2 py-1" to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
	  </div>
    </div>
  );
};
