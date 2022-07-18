import React, {useContext}from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {
	
const {store,actions} =useContext(Context);
const aux = store.people;
return (
	<div className="text-center mt-5">
	{aux.map((element,i) =>{return(<div key={i} className="card" style={{width:"18rem"}} >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>)})}
	</div>)
}
