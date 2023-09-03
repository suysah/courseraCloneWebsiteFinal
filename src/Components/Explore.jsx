import React from "react";

const Explore = (props) => {
  return (
    
        <div >
          <img
            src={props.img}
            className="card-img-top"
            alt="img"
            style={{ height: "150px", width: "200px" }}
          />
          <div className="card-body mt-2">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.courses}</p>
          </div>
        </div>
     
   
  );
};

export default Explore;
