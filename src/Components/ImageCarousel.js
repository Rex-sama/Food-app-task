import Carousel from "react-bootstrap/Carousel";
import { base } from "../config/baseUrl";
import "../styles/Popular.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function ImageCarousel({ dish, index, handleSelect }) {
  const icons = {
    nextIcon: (
      <i className="arrow-icons">
        <IoIosArrowDroprightCircle />
      </i>
    ),
    prevIcon: (
      <i className="arrow-icons">
        <IoIosArrowDropleftCircle />
      </i>
    ),
  };
  return (
    <div>
      <Carousel
        nextIcon={icons.nextIcon}
        prevIcon={icons.prevIcon}
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        fade
        indicators={false}
        slide={true}
      >
        {dish?.map((item) => {
          return (
            <Carousel.Item className="dish-carousal" key={item.dishid}>
              <img
                className="rounded-2 dish-carousal-image"
                src={base + item.dishImage}
                alt={item.dishname}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
