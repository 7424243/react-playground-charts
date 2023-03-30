import { FC } from "react";
import "./App.css";
import {
  ApexBarChart,
  ApexSemiDonut,
  ApexStackedBarChart,
  GoogleChartsGauge,
  ReactGaugeChart,
} from "./components";

export const App: FC = () => {
  return (
    <div className="App">
      <ApexStackedBarChart />
      <ApexBarChart />
      <GoogleChartsGauge />
      <ReactGaugeChart />
      <ApexSemiDonut />
    </div>
  );
};
