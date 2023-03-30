import { FC } from "react";
import "./App.css";
import {
  BarChart,
  GoogleChartsGauge,
  ReactGaugeChart,
  SemiDonut,
} from "./components";

export const App: FC = () => {
  return (
    <div className="App">
      <BarChart />
      <GoogleChartsGauge />
      <ReactGaugeChart />
      <SemiDonut />
    </div>
  );
};
