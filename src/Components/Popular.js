import "../styles/Popular.css";
import { BiFilterAlt } from "react-icons/bi";
import { NavDropdown } from "react-bootstrap";
import { RiArrowDropDownLine } from "react-icons/ri";
import CardPanel from "./CardPanel";
import { useState } from "react";

function Popular({ data }) {
  const [Day, setDay] = useState("");
  const days = [
    { id: 1, day: "Sunday" },
    { id: 2, day: "Monday" },
    { id: 3, day: "Tuesday" },
    { id: 4, day: "Wednesday" },
    { id: 5, day: "Thursday" },
    { id: 6, day: "Friday" },
    { id: 7, day: "Saturday" },
  ];

  const onSelectDay = (e) => {
    console.log(e.target.innerText);
    setDay(e.target.innerText);
  };

  return (
    <div className="popular-main-container">
      <div className="main-nav-drop">
        <NavDropdown
          id="select-day-dropdown"
          title={
            <span className="first-dropdown-content">
              <i className="dropdown-content">
                <BiFilterAlt /> &nbsp;&nbsp;{" "}
                {Day ? Day : "Select a Delivery Day"}
              </i>
              <i className="dropdown-icon">
                <RiArrowDropDownLine />
              </i>
            </span>
          }
        >
          {days.map((i) => {
            return (
              <NavDropdown.Item
                key={i.id}
                onClick={onSelectDay}
                style={{ fontSize: "0.8em" }}
              >
                {i.day}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      </div>
      <CardPanel data={data} title="Popular Weekly Food" viewAll={false} />
    </div>
  );
}

export default Popular;
