import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const [img, setImg] = useState(
    "https://starwars-visualguide.com/assets/img/placeholder.jpg"
  );

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
            className="btn btn-outline-primary btn-sm"
          >
            Saber mas
          </button>
        </Link>
        <button
          type="button"
          onClick={props.addfavorites}
          className="btn btn-outline-dark btn-sm float-end"
        >
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
  );
};
