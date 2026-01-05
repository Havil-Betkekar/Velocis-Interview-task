import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./DonutPieChart.css";

const DonutPieChart = ({ title, data, colors }) => {
  return (
    <div className="donutSection">
      <h2 className="donutTitle">{title}</h2>

      <div className="donutWrapper">
        <ResponsiveContainer width={360} height={360}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={140}
              label={({ value }) => `${value}%`}
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => `${v}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DonutPieChart;
