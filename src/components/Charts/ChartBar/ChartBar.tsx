import React, { useState } from "react";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../Types/GlobalType";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

import Card from "../../UI/Card/Card";
import ST from "./ChartBar.module.scss";
function ChartBar({
  data,
  options,
  className,
}: propsType & {
  data: ChartData<"bar", number[], unknown>;
  options?: ChartOptions<"bar">;
}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  return (
    <Card className={classNameMaker(className)}>
      <div className={classNameMaker(ST.chartBar)}>
        <Bar data={data} options={options}></Bar>
      </div>
    </Card>
  );
}

export default ChartBar;
