import React from "react";
import "../styles/ChefCard.css";
import { base } from "../config/baseUrl";
import main from "../assets/logo2.png";
import parse from "html-react-parser";

function ChefCard({ chefData }) {
  return (
    <div className="chef-main-container">
      <div className="chef-background">
        <h4>Chef Of The Week</h4>
        {chefData?.map((item) => {
          return (
            <div key={item.chefid} className="chef-card">
              <img
                className="chef-profile"
                src={base + item.chefprofile}
                alt={item.chefname}
              />
              <img src={main} alt="logo" className="chef-logo" />
              <div className="chef-details">
                <div className="chef-heading">
                  <p>{item.chefname}</p>
                  <div className="chef-heading-rate">
                    <p>
                      {item.reviewCnt}
                      <span style={{ color: "yellow" }}>&#9733;</span>
                      <span>({item.totalRating} reviews)</span>
                    </p>
                  </div>
                </div>
                <div className="about-chef">{parse(item.aboutChef)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChefCard;
