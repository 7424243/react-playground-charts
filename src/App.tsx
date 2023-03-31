import { FC } from "react";
import "./App.css";
import {
  ApexBarChart,
  ApexBarWithMarkersChart,
  ApexPlotAndColumn,
  ApexSemiDonut,
  ApexStackedBarChart,
  GoogleChartsGauge,
  ReactGaugeChart,
} from "./components";

export const App: FC = () => {
  return (
    <div className="App">
      <ApexBarWithMarkersChart />
      <ApexPlotAndColumn />
      <ApexStackedBarChart />
      <ApexBarChart />
      <GoogleChartsGauge />
      <ReactGaugeChart />
      <ApexSemiDonut />
    </div>
  );
};
