import React, { ChangeEvent, useState } from "react";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../helpers/GlobalType";

import { ChartData, ChartOptions } from "chart.js";

import Card from "../../../components/UI/Card/Card";
import LineChart from "../../../components/Charts/LineChart/LineChart";

import {
  chartDataType,
  selectOption,
  SelectOptions,
} from "../../../DummyData/DummyDataType";
import ST from "./OverviewLineChart.module.scss";
import SelectInput from "../../../components/Form/SelectInput/SelectInput";
import { dataProvider, optionSelect } from "../../../DummyData/DummyData";
function OverviewLineChart({
  data,

  select,
  selectOptions,
  className,
}: propsType & {
  data: typeof dataProvider;

  select?: boolean;
  selectOptions?: SelectOptions;
}) {
  const [selectState, setSelectState] = useState("");

  let fitData =
    selectState === "leads"
      ? data.leads
      : selectState === "earning"
      ? data.activities
      : data.trainees;

  return (
    <Card className={classNameMaker(className)}>
      {selectOptions && (
        <SelectInput
          data={selectOptions}
          SetValueOnChange={setSelectState}
        ></SelectInput>
      )}
      <LineChart
        data={fitData.chartLine.data}
        options={fitData.chartLine.options}
      ></LineChart>
    </Card>
  );
}

export default OverviewLineChart;
