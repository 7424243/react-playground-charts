import { FC } from "react";
import Chart from "react-google-charts";

const data = [
  ["Label", "Value"],
  ["Pounds", 479],
];

const options = {
  min: 0,
  max: 15000,
  greenFrom: 0,
  greenTo: 3500,
  yellowFrom: 3500,
  yellowTo: 6000,
  redFrom: 6000,
  redTo: 15000,
  majorTicks: ["", "", ""],
  minorTicks: 0,
  title: "Department Z",
};

export const GoogleChartsGauge: FC = () => {
  return (
    <div>
      <h2 style={{ textAlign: "left", paddingLeft: "5%" }}>
        Gauge Chart - React Google Charts
      </h2>
      <Chart
        chartType="Gauge"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};
