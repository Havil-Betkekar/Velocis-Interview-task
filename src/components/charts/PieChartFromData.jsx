import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./ManagerDemographicsPieCharts.css";

const COLORS = [
  "#FFEB00",
  "#FFE000",

  "#E0E0E0",
  "#FFCC00",
  "#FFD600",
  "#F5F5F5",
  "#CFCFCF",
  "#BDBDBD",
  "#9E9E9E",
];

const PieChartFromData = () => {
  const minorHead800Expenditure = [
    { name: "Miscellaneous General Services", value: 6521.24 },
    { name: "Medical & Public Health", value: 806.66 },
    { name: "Transport Services", value: 510.73 },
    { name: "Rural Development Programme", value: 386.98 },
    { name: "Industries & Minerals", value: 200.38 },
    { name: "Urban Development", value: 190.65 },
    { name: "Urban Development Capital", value: 131.62 },
    { name: "Roads & Bridges", value: 123.65 },
    { name: "Administration of Justice", value: 100.46 },
  ];

  const renderValueLabel = ({ cx, cy, midAngle, outerRadius, value }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 18;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#333"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={11}
      >
        ₹{value.toFixed(0)} cr
      </text>
    );
  };

  return (
    <>
      {/* Minor Head 800 Expenditure Pie */}
      <div className="demographicsSection">
        <h2 className="demographicsTitle">
          Expenditure under Minor Head 800 (₹ crore)
        </h2>

        <div className="demographicsChart">
          <ResponsiveContainer width={420} height={420}>
            <PieChart>
              <Pie
                data={minorHead800Expenditure}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={160}
                label={renderValueLabel}
                labelLine
              >
                {minorHead800Expenditure.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip formatter={(value) => `₹${value} crore`} />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="demographicsLegend">
            {minorHead800Expenditure.map((item) => (
              <div key={item.name} className="legendItem">
                <span className="dot" />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChartFromData;
