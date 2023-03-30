import { FC } from "react";
import Chart from "react-apexcharts";

export const ApexSemiDonut: FC = () => {
  const series: number[] = [3500, 6000, 15000];
  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "donut",
      id: "donut-chart",
      background: "#FFF",
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fontFamily: "Helvetica, Arial, sans-serif",
      foreColor: "#000",
      toolbar: {
        show: true,
        offsetY: 20,
        tools: {
          download: true,
        },
        export: {
          svg: {
            filename: "semiDonutChart",
          },
          png: {
            filename: "semiDonutChart",
          },
          csv: {
            filename: "semiDonutChart",
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
          },
        },
      },
    },
    colors: ["#64a15e", "#e7be18", "#c83739"],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["1-2 Days", "3-4 Days", "5+ Days"],
    noData: {
      text: "No data found, try again later!",
      align: "center",
      verticalAlign: "top",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    title: {
      text: "Department H",
      align: "center",
      offsetY: 375,
    },
    legend: {
      position: "top",
      onItemClick: {
        toggleDataSeries: true,
      },
    },
  };

  return (
    <div>
      <h2 style={{ textAlign: "left", paddingLeft: "5%" }}>
        Semi Donut Chart - ApexCharts
      </h2>
      <Chart type="donut" series={series} options={options} />
    </div>
  );
};
