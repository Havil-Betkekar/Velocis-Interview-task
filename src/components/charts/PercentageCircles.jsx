import React from "react";
import "./PercentageCircles.css";

const PercentageCircles = ({ data, colors }) => {
  return (
    <div className="percentageCircles">
      {data.map((item, index) => (
        <div
          key={item.name}
          className="percentageCircle"
          style={{ background: colors[index % colors.length] }}
        >
          <div className="circleValue">{item.value}%</div>
          <div className="circleLabel">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PercentageCircles;
