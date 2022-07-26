import React, { useState, useEffect, useContext } from "react";
import { Link ,useParams} from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const SinglePlanet = () => {
  const { store, actions } = useContext(Context);
  let aux = store.data;
  let params = useParams()

  return (
    <div className="container-fluid">
      <div className="container bg-white rounded">
        <div className="row">
          <div className="col">
            <img
              id="singleData"npm 
              className="figure-img img-fluid rounded"
              src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
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
            <h1>population</h1>
            <p className="fs-3">{aux.population}</p>
          </div>
          <div className="col-2 text-center border">
            <h1>climate</h1>
            <p className="fs-3">{aux.climate}</p>
          </div>
          <div className="col-2 text-center border">
            <h1>terrain</h1>
            <p className="fs-3">{aux.terrain}</p>
          </div>
          <div className="col-2 text-center border">
            <h1>diameter</h1>
            <p className="fs-3">{aux.diameter}</p>
          </div>
          <div className="col-2 text-center border">
            <h1>rotation</h1>
            <p className="fs-3">{aux.rotation_period}</p>
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
