import Slider from "react-slick";
import NewsImage from "../../assets/images/news.jpg";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    { id: 1, title: "Card 1", content: "This is card 1." },
    { id: 2, title: "Card 2", content: "This is card 2." },
    { id: 3, title: "Card 3", content: "This is card 3." },
    { id: 4, title: "Card 4", content: "This is card 4." },
    { id: 5, title: "Card 5", content: "This is card 5." },
  ];

  return (
    <div className="card-slide slick-card">
        <div className="container">
      <div className="row">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="col-md-3 card-container">
              <div class="img-section">
                <img src={NewsImage} alt="news" />
                <div class="label-tag">Label</div>
              </div>
              <div class="content">
                <p class="txt4">Project ID:900022</p>
                <p class="txt5">906.59</p>
                <p class="txt2">
                  Development and Augmentation of Value Chain Infrastructure for
                  Apple at Shopian under Horticulture Cluster Development
                  Programme, Jammu & Kashmir
                </p>
              </div>
            </div>
            
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
