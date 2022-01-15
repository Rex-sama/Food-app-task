import Slider from "react-slick";
import { base } from "../config/baseUrl";
import "../styles/Category.css";

function Category({ list }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="category-box">
      <p />
      <div className="category-flex">
        <Slider {...settings}>
          {list?.map((item) => {
            return (
              <div key={item.id}>
                <img
                  style={{ margin: "0 auto" }}
                  src={base + item.imageUrl}
                  alt={item.name}
                  width={35}
                  height={30}
                />
                <p>{item.name}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
// F5F6F7
// 1F2933
// 9AA5B1
// CBD2D9
// EC2044 red
// 2C8C64 green
// FFC107 yellow

export default Category;
