import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bannerone from "../../assets/images/banner-one.png";
import bannertwo from "../../assets/images/banner-two.png";

function HeroCrausel() {
  return (
    <div className="hero-section">
      <Carousel fade>
        <Carousel.Item>
          <img src={bannerone} alt="nature" />
          <div className="cover-images-overlay"></div>
          <Carousel.Caption>
            <h3 className="slideup-animation">India Investment Grid</h3>
            <p className="slidein-animation">
              India Investment Grid (IIG), an initiative of Government of India
              showcases investment opportunities across states and sectors in
              India on a single interactive platform.
            </p>
            <button>Explore More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={bannertwo} alt="Logo" />
          <div className="cover-images-overlay"></div>
          <Carousel.Caption>
            <h3 className="slideup-animation">Stressed Assets</h3>
            <p className="slidein-animation">
              Acquire underlying assets at attractive valuations! The
              opportunity to make disproportionate gains through investing in
              opportunities under the Insolvency and Bankruptcy Code 2016.
            </p>
            <button>Explore More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={bannerone} alt="Logo" />
          <div className="cover-images-overlay"></div>
          <Carousel.Caption>
            <h3 className="slideup-animation">
              National Infrastructure Pipeline
            </h3>
            <p className="slidein-animation">
              Augmenting India’s infrastructure through Identifying key projects
              for investments across infrastructure sectors.
            </p>
            <button>Explore More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroCrausel;
