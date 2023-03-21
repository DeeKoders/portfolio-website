import React from "react";

function IndProject(props) {
  return (
    <div class="card col-md-3 col-10 my-3 mx-3 text-center">
      <img src={props.img} height="200px" className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h5 className="card-title text-uppercase text-dark">{props.name}</h5>
        <p
          className="card-text text-dark"
          style={{ height: 50, overflow: "scroll" }}
        >
          {props.desc}
        </p>
        <button
          className="btn btn-dark text-center align-items-end"
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
