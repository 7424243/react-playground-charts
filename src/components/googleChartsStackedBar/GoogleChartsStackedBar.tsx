import { FC } from "react";
import Chart from "react-google-charts";

export const GoogleChartsStackedBar: FC = () => {
  const data = [
    [
      "Cutter",
      "1-2 Days",
      { type: "string", role: "tooltip" },
      "3-4 Days",
      { type: "string", role: "tooltip" },
      "5+ Days",
      { type: "string", role: "tooltip" },
    ],
    [
      "Cutter 1",
      1000,
      "0 lbs - 1000 lbs",
      1000,
      "1000 lbs - 2000 lbs",
      1000,
      "2000 lbs - 3000 lbs",
    ], //3,000 total
    [
      "Cutter 2",
      2000,
      "0 lbs - 2000 lbs",
      1000,
      "2000 lbs - 3000 lbs",
      1000,
      "3000 lbs - 4000 lbs",
    ], //4,000 total
    [
      "Cutter 3",
      3000,
      "0 lbs - 3000 lbs",
      2000,
      "3000 lbs - 5000 lbs",
      5000,
      "5000 lbs - 10000 lbs",
    ], //10,000 total
    [
      "Cutter 4",
      1500,
      "0 lbs - 1500 lbs",
      4500,
      "1500 lbs - 6000 lbs",
      2000,
      "6000 lbs - 8000 lbs",
    ], //8,000 total
    [
      "Cutter 5",
      2500,
      "0 lbs - 2500 lbs",
      2500,
      "2500 lbs - 5000 lbs",
      1000,
      "5000 lbs - 6000 lbs",
    ], //6,000 total
  ];

  const currentCapacities = [1500, 500, 6000, 9000, 2000];

  const options = {
    title: "All Cutters",
    chartArea: { width: "80%" },
    isStacked: true,
    hAxis: {
      minValue: 0,
    },
    colors: ["#64a15e", "#e7be18", "#c83739"],
  };

  return (
    <div>
      <h2 style={{ textAlign: "left", paddingLeft: "5%" }}>
        Bar Chart with Markers - ApexCharts
      </h2>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};
