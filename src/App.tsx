import { FC } from "react";
import "./App.css";
import {
  ApexBarChart,
  ApexPlotAndColumn,
  ApexSemiDonut,
  ApexStackedBarChart,
  GoogleChartsGauge,
  ReactGaugeChart,
} from "./components";

export const App: FC = () => {
  return (
    <div className="App">
      <ApexPlotAndColumn />
      <ApexStackedBarChart />
      <ApexBarChart />
      <GoogleChartsGauge />
      <ReactGaugeChart />
      <ApexSemiDonut />
    </div>
  );
};
