import { FC } from "react";
import ReactApexChart from "react-apexcharts";

export const ApexStackedBarChart: FC = () => {
  const series = [
    {
      name: "1-2 Days",
      data: [1000, 2000, 3000, 500, 2250],
    },
    {
      name: "3-4 Days",
      data: [2000, 3000, 5000, 2000, 4000],
    },
    {
      name: "5+ Days",
      data: [3000, 4000, 10000, 2500, 8000],
    },
    // {
    //   name: "Current Capacity",
    //   data: [1500, 3567, 8000, 600, 4000],
    // },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#64a15e", "#e7be18", "#c83739"],
    dataLabels: {
      enabled: false,
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
        borderRadius: 3,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
        barHeight: "60%",
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "13px",
              fontWeight: 600,
            },
            formatter: (val: string, opts) => {
              console.log("plot opts: ", opts);
              console.log("plot val, ", val);
              return val;
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: ["Cutter 1", "Cutter 2", "Cutter 3", "Cutter 4", "Cutter 5"],
      labels: {
        formatter: function (val: any) {
          return val + "lbs";
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val: any, opts) {
          console.log("opts: ", opts);
          return val + "lbs";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  return (
    <div>
      <h2 style={{ textAlign: "left", paddingLeft: "5%" }}>
        Stacked Bar Chart - ApexCharts
      </h2>
      <ReactApexChart type="bar" series={series} options={options} />
    </div>
  );
};
