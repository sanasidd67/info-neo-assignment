

import React, { useState } from "react";
import CardImg from "../../assets/images/card-img.jpg"

const Swiper = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Heading 1",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime.",
      delay: "0.1s",
    },
    {
      id: 2,
      title: "Heading 2",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime.",
      delay: "0.3s",
    },
    {
      id: 3,
      title: "Heading 3",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime.",
      delay: "0.5s",
    },
    {
      id: 4,
      title: "Heading 4",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis est sapiente natus officiis maxime.",
      delay: "0.7s",
    },
  ]);

  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s">
          <h4 className="heading-tag text-primary">MARQUEE OPPORTUNITIES</h4>
        </div>
        <div className="row g-4 justify-content-center text-center">
          {cards.map((card) => (
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay={card.delay}
              key={card.id}
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src={CardImg}
                    className="img-fluid w-100 rounded-top"
                    alt="card-img"
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <h2 className="h4 mb-4">{card.title}</h2>
                    <p className="mb-4">{card.description}</p>
                    <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Swiper;