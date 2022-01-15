import React from "react";
import "../styles/ExploreDishes.css";
import CardPanel from "./CardPanel";

function ExploreDishes({ explore }) {
  return (
    <div className="explore-main-container">
      {explore?.map((item) => {
        return (
          <div style={{ marginBottom: "30px" }} key={item.id}>
            {item.cusinie_details_result.length > 0 && (
              <CardPanel
                data={item.cusinie_details_result}
                title={`Explore ${item.name} Dishes`}
                viewAll={true}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ExploreDishes;
