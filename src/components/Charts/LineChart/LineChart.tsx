import React, { useState } from "react";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../Types/GlobalType";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

import ST from "./LineChart.module.scss";
function LineChart({
  data,
  options,

  className,
}: propsType & {
  data: ChartData<"line", number[], unknown>;
  options?: ChartOptions<"line">;
}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  return (
    <div className={classNameMaker(ST.LineChart, className)}>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default LineChart;
