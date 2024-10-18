

import React, { useState } from "react";

const Cards = () => {

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Card 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
    },
    {
      id: 2,
      title: "Card 2",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
    },
    {
      id: 3,
      title: "Card 3",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
    },
  ]);

  return (
    <div className="container new-data">
      <div className="row">
      <div className="text-center mx-auto pb-5 wow fadeInUp heading-tag" data-wow-delay="0.1s">
          <h4 className="heading-tag text-primary">WHAT'S NEW</h4>
        </div>
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <div className="card">
              <div className="card-content">
                <h2 className="card-title text-center">{card.title}</h2>
                <p className="card-body">{card.body}</p>
                <a href="#" className="button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
