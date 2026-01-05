import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./ManagerDemographicsPieCharts.css";

const COLORS = [
  "#FFEB00",
  "#E0E0E0",
  "#F5F5F5",
  "#FFCC00",
  "#CFCFCF",
  "#FFE000",

  "#BDBDBD",
  "#9E9E9E",

  "#FFD600",
];

const ManagerDemographicsPieCharts = () => {
  const managerDemographics = [
    { name: "UK", value: 17.7 },
    { name: "Netherlands", value: 14.3 },
    { name: "Germany", value: 9.5 },
    { name: "Belgium", value: 2.7 },
    { name: "Italy", value: 6.8 },
    { name: "France", value: 6.1 },
    { name: "Spain", value: 5.4 },
    { name: "Poland", value: 4.1 },

    { name: "Other", value: 33.1 },
  ];
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    name,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 20;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#333"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
      >
        {name} {(percent * 100).toFixed(1)}%
      </text>
    );
  };

  return (
    <>
      <div className="demographicsSection">
        <h2 className="demographicsTitle">Manager demographics</h2>

        <div className="demographicsChart">
          <ResponsiveContainer width={500} height={420}>
            <PieChart>
              <Pie
                data={managerDemographics}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={160}
                innerRadius={0}
                labelLine={true}
                label={renderCustomizedLabel}
              >
                {managerDemographics.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>

          {/* LEGEND */}
          <div className="demographicsLegend">
            {managerDemographics.map((item) => (
              <div key={item.name} className="legendItem">
                <span className="dot" />
                {item.name} — {item.value}%
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerDemographicsPieCharts;
