import React from "react";
import GraphImg from "../../assets/images/graph.png";

const Graph = () => {
  return (
    <div className="container-fluid graph bg-light py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div
            className="col-lg-6"
          >
            <div className="graph-img">
              <img
                src={GraphImg}
                className="img-fluid w-100 rounded-top bg-white"
                alt="graph"
              />
            </div>
          </div>
          <div
            className="col-lg-6"
          >
            <h2 className="display-5 mb-4">
              Choose State & see it on the map !
            </h2>
            <p className="text ps-4 mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              atque nihil unde quisquam, deleniti illo a. Quam harum laboriosam,
              laudantium, deleniti perferendis voluptates ex non laborum libero
              magni, minus illo!
            </p>
            <div className="row g-4 justify-content-between mb-5">
              <div className="col-lg-6 col-xl-5">
                <p className="text-dark">Roads & Highways</p>
                <p className="text-dark mb-0">
                  Karnataka
                </p>
              </div>
              <div className="col-lg-6 col-xl-7">
                <p className="text-dark">
                  USD 131.82 bn | Worth
                </p>
                <p className="text-dark mb-0">
                  768 | Opportunities
                </p>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center">
              <div className="col-sm-4">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
