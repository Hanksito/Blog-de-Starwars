import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import placeholderImg from "../../img/placeholder.jpg";
import { AiOutlineHeart } from 'react-icons/ai';


export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const [img, setImg] = useState(placeholderImg);

  useEffect(() => {
    getImg();
  }, []);

  const getImg = () => {
    let img = `https://starwars-visualguide.com/assets/img/${props.type}/${props.id}.jpg`;
    fetch(img).then((res) => {
      if (res.ok) {
        setImg(img);
      }
    });
  };

  return (
    <div
      key={props.id}
      className="card m-3 wrap col-3"
      style={{ width: "19rem" }}
    >
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body text-start">
        <h5 className="card-title">{props.name}</h5>
        <Link to={`/${props.type}/${props.name}/${props.id}`}>
          <button
            onClick={() => actions.getid(props.url)}
            type="button"
            className="btn btn-outline-primary"
          >
            Saber mas
          </button>
        </Link>
        <button
          type="button"
          onClick={props.addfavorites}
          className="float-end btn btn-outline-warning text-warning"
          style={{backgroundColor: (props.estiloBoton==true)? "orange" : "" }}
        >
            <AiOutlineHeart />
        </button>
      </div>
    </div>
  );
};
