import React from "react";

const Intro = () => {
  return (
    <div className="container-fluid text-center mt-5 mb-5">
      <div className="row">
        <div className="col-12  mt-4 p-4">
          <h1 className="font-size-lg">Learn without limits</h1>
          <h5 className="text-lg">
            Start, switch, or advance your career with more than 5,800 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </h5>
          <button className="btn btn-primary mt-4">Join Now</button>
        </div>
        </div>

      <div className="row">
        <div className="col-12  mt-4" style={{ backgroundColor: '#9AECDB', padding: '50px' }}>
          <h2>We collaborate with <span className="text-primary">300+ leading universities and companies</span></h2>
          <img className="m-3" src="./Images/google.png" alt="photo" />
          <img className="m-3" src="./Images/duke-3.png" alt="photo" />
          <img className="m-3" src="./Images/imperial.png" alt="photo" />
          <img className="m-3" src="./Images/stanford.png" alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
