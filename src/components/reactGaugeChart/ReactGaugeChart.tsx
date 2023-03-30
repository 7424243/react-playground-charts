import { FC } from "react";
import GaugeChart from "react-gauge-chart";

export const ReactGaugeChart: FC = () => {
  return (
    <div>
      <h2 style={{ textAlign: "left", paddingLeft: "5%" }}>
        Gauge Chart - react-gauge-chart
      </h2>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={3}
        colors={["#64a15e", "#e7be18", "#c83739"]}
        arcWidth={0.3}
        arcPadding={0}
        cornerRadius={3}
        arcsLength={[0.23, 0.16, 0.6]} //max - min / total capacity for each range of days
        percent={0.03} //current capacity / by total capacity
        animate={false}
        textColor={"#464A4F"}
      />
    </div>
  );
};
