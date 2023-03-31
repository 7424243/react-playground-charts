import { FC } from "react";
import ReactApexChart from "react-apexcharts";

export const ApexBarWithMarkersChart: FC = () => {
  const series = [
    {
      name: "Total Capacity",
      data: [
        {
          x: "Cutter 1",
          y: 3000, //total capacity
          goals: [
            {
              name: "Current Capacity",
              value: 1500, //current capacity
              strokeWidth: 30,
              strokeHeight: 0,
              strokeLineCap: "round",
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "Cutter 2",
          y: 4000,
          goals: [
            {
              name: "Current Capacity",
              value: 2750,
              strokeWidth: 30,
              strokeHeight: 0,
              strokeLineCap: "round",
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "Cutter 3",
          y: 10000,
          goals: [
            {
              name: "Current Capacity",
              value: 11000,
              strokeWidth: 30,
              strokeHeight: 0,
              strokeLineCap: "round",
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "Cutter 4",
          y: 12000,
          goals: [
            {
              name: "Current Capacity",
              value: 500,
              strokeWidth: 30,
              strokeHeight: 0,
              strokeLineCap: "round",
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "Cutter 5",
          y: 15000,
          goals: [
            {
              name: "Current Capacity",
              value: 900,
              strokeWidth: 30,
              strokeHeight: 0,
              strokeLineCap: "round",
              strokeColor: "#775DD0",
            },
          ],
        },
      ],
    },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      height: 350,
      type: "bar",
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#00E396"],
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Total Capacity", "Current Capacity"],
      markers: {
        fillColors: ["#00E396", "#775DD0"],
      },
    },
  };
  return (
    <div>
      <h2 style={{ textAlign: "left", paddingLeft: "5%" }}>
        Bar Chart with Markers - ApexCharts
      </h2>
      <ReactApexChart type="bar" series={series} options={options} />
    </div>
  );
};
