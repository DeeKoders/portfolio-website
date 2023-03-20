import React from "react";
import { Link, Redirect } from "react-router-dom";

function IndProject(props) {
  return (
    <div class="card col-3 my-3 mx-3 text-center">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h5 className="card-title text-uppercase text-dark">{props.name}</h5>
        <p className="card-text text-dark">{props.desc}</p>
        <button
          className="btn btn-dark text-center"
          onClick={() => {
            window.open(props.link);
          }}
        >
          {"Jump In"}
        </button>
      </div>
    </div>
  );
}

export default IndProject;
