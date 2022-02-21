import React, { useState } from "react";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../Types/GlobalType";

import { ChartData, ChartOptions } from "chart.js";

import Card from "../../../components/UI/Card/Card";
import LineChart from "../../../components/Charts/LineChart/LineChart";
import ST from "./OverviewLineChart.module.scss";
function OverviewLineChart({
  data,
  options,
  select,
  selectOptions,
  className,
}: propsType & {
  data: ChartData<"line", number[], unknown>;
  options?: ChartOptions<"line">;
  select?: boolean;
  selectOptions?: string[];
}) {
  return (
    <Card className={classNameMaker(className)}>
      <LineChart data={data} options={options}></LineChart>
    </Card>
  );
}

export default OverviewLineChart;
