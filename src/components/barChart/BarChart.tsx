import { FC } from "react";
import ReactApexChart from "react-apexcharts";

export const BarChart: FC = () => {
  const series = [
    {
      data: [400, 258, 448, 110, 540, 400, 690],
    },
  ];

  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        return `${val} lbs`;
      },
    },
    xaxis: {
      title: {
        text: "Pounds (lbs)",
        style: {
          fontSize: "15px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 500,
        },
      },
    },
    labels: [
      "Galv 70",
      "Paint Grip -61",
      "Stainless Steel - 64",
      "Stainless Steel - 65",
      "Aluminum - 66",
      "G90 - 68",
      "Black Iron - 67",
    ],
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div>
      <ReactApexChart type="bar" series={series} options={options} />
    </div>
  );
};
