import { FC } from "react";
import ReactApexChart from "react-apexcharts";

export const ApexPlotAndColumn: FC = () => {
  const series = [
    {
      name: "Cutters",
      type: "column",
      data: [5000, 4000, 10000, 12000, 15000],
    },
    {
      name: "Current Capacity",
      type: "line",
      data: [1500, 2750, 11000, 500, 900],
    },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "scatter",
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "All Cutters",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: ["Cutter 1", "Cutter 2", "Cutter 3", "Cutter 4", "Cutter 5"],
    xaxis: {
      type: "category",
    },
    yaxis: [
      {
        labels: {
          formatter: function (val: any) {
            return val + " lbs";
          },
        },
      },
    ],
  };

  return (
    <div>
      <h2 style={{ textAlign: "left", paddingLeft: "5%" }}>
        Plot and Column Chart - ApexCharts
      </h2>
      <ReactApexChart options={options} series={series} type="scatter" />
    </div>
  );
};
