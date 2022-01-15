import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import "../styles/DishCard.css";
import { base } from "../config/baseUrl";
import profile from "../assets/profile.png";

function DishCard({ dish }) {
  const [index, setIndex] = useState(0);
  const dishMaster = dish?.dishMaster ? dish?.dishMaster : dish?.dish_masters;
  const rating = dish.totalRating ? dish.totalRating : dish?.chefRateing;
  const reviews = dish.reviewCnt ? dish.reviewCnt : dish?.chefReview;
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="dishcard-main-box">
      <div className="dishcard-box">
        <ImageCarousel
          dish={dishMaster}
          index={index}
          handleSelect={handleSelect}
        />
        <div className="dishcard-box-profile">
          <img
            src={dish.chefprofile ? base + dish.chefprofile : profile}
            alt={dish.chefname}
            width={50}
            height={50}
          />
        </div>
        <div className="dishcard-captions">
          <p> {dishMaster[index]?.dishname}</p>
          <p>{dish.chefname}</p>
        </div>
      </div>

      <div className="dishcard-footer">
        <div className="dishcard-ratings">
          <div>
            <p>
              {rating}
              <span style={{ color: "yellow", fontSize: "1em" }}>&#9733;</span>
            </p>
            <p>({reviews} reviews)</p>
          </div>
        </div>
        <div className="dishcard-details">
          <p>
            View Details
            <span style={{ fontSize: "1em" }}> &#8594;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DishCard);
