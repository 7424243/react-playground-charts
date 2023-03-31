import { FC } from "react";
import "./App.css";
import {
  ApexBarChart,
  ApexBarWithMarkersChart,
  ApexPlotAndColumn,
  ApexSemiDonut,
  ApexStackedBarChart,
  GoogleChartsGauge,
  GoogleChartsStackedBar,
  ReactGaugeChart,
} from "./components";

export const App: FC = () => {
  return (
    <div className="App">
      <GoogleChartsStackedBar />
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
