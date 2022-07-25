import React, { useContext } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/cards";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const people = store.people;
  const planetas = store.planetas;
  let img =
    "https://upload.wikimedia.org/wikipedia/commons/0/09/Luke_Skywalker_con_traje_de_piloto.jpg";
  let img2 =
    "https://www.nosolobits.com/imagenes/guia/coruscant_1843754588.jpg";

  return (
    <div  className="container-fluid ">
      <h1 className="text-center font-weight-bold border border-dark my-2">
        People
      </h1>
      <div id={"scrolltime"} className="row flex-nowrap ">
        {people.map((element) => {
          return <Card  name={element.name} id={element.uid} url={element.url} type={"characters"}/>;
        })}
      </div>
      <h1 className="text-center font-weight-bold border border-dark my-2">
        Planets
      </h1>
      <div id={"scrolltime"} className="row flex-nowrap ">
        {planetas.map((element) => {
          return <Card  name={element.name} id={element.uid} url={element.url} type={"planets"}/>;
        })}
      </div>
    </div>
  );
};
