import React, { ChangeEvent, useState } from "react";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../helpers/GlobalType";

import { ChartData, ChartOptions } from "chart.js";

import Card from "../../../components/UI/Card/Card";
import LineChart from "../../../components/Charts/LineChart/LineChart";

import { chartDataType } from "../../../DummyData/DummyDataType";
import ST from "./OverviewLineChart.module.scss";
function OverviewLineChart({
  data,

  select,
  selectOptions,
  className,
}: propsType & {
  data: chartDataType<"line">[];

  select?: boolean;
  selectOptions?: string[];
}) {
  const [curChart, setcurChart] = useState(data[0]);
  const selectLineChart = (e: ChangeEvent<HTMLSelectElement>) => {
    let curData = data.find((el) => el.name === e.target.value) || data[0];
    setcurChart(curData);
  };
  return (
    <Card className={classNameMaker(className)}>
      <select
        onChange={selectLineChart}
        name="LineChartDisplay"
        id="LineChartDisplay"
      >
        <option value="none"> Select option </option>
        <option value={data[0].name}> Trainees </option>
        <option value={data[1].name}> Leads </option>
        <option value={data[2].name}> Earning </option>
      </select>
      <LineChart data={curChart.data} options={curChart.options}></LineChart>
    </Card>
  );
}

export default OverviewLineChart;
