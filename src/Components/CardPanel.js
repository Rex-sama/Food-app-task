import "../styles/Popular.css";
import { useState } from "react";
import DishCard from "./DishCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";

function CardPanel({ data, title, viewAll }) {
  const [onviewAll, setOnViewAll] = useState(false);
  const [Nav, setNav] = useState(null);

  const nextHandler = () => {
    Nav.slickNext();
  };

  const prevHandler = () => {
    Nav.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="popular-heading">
        <h4>{title}</h4>
        <div className="popular-navigate">
          {viewAll && (
            <button id="view-all" onClick={() => setOnViewAll(!onviewAll)}>
              {!onviewAll ? "View All" : "View Less"}
            </button>
          )}
          {!onviewAll && (
            <button id="view-arrow-buttons" onClick={prevHandler}>
              <BsArrowLeft />
            </button>
          )}
          {!onviewAll && (
            <button id="view-arrow-buttons" onClick={nextHandler}>
              <BsArrowRight />
            </button>
          )}
        </div>
      </div>
      <div className="popular-week-content">
        {!onviewAll ? (
          <Slider ref={(c) => setNav(c)} {...settings}>
            {data?.map((dish) => {
              return <DishCard key={dish.chefid} dish={dish} />;
            })}{" "}
          </Slider>
        ) : (
          <div className="popular-week-flex">
            {data?.map((dish) => {
              return <DishCard key={dish.chefid} dish={dish} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardPanel;
