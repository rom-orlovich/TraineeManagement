import { useState } from "react";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../helpers/GlobalType";

import Card from "../../../components/UI/Card/Card";
import LineChart from "../../../components/Charts/LineChart/LineChart";

import { SelectOptions } from "../../../DummyData/DummyDataType";

import { dataProvider } from "../../../DummyData/DummyData";

import { useGetManageSelectInputState } from "../../../helpers/HelperHooks";
import ST from "./OverviewLineChart.module.scss";
function OverviewLineChart({
  data,

  selectOptions,
  className,
}: propsType & {
  data: Omit<typeof dataProvider, "balance">;

  select?: boolean;
  selectOptions: SelectOptions;
}) {
  const {
    selectState,

    SelectInputEL,
  } = useGetManageSelectInputState(selectOptions);

  let dataRes = data[selectState as "leads" | "trainees" | "activities"];

  return (
    <Card className={classNameMaker(className)}>
      {<SelectInputEL />}
      <LineChart
        className={classNameMaker(ST)}
        data={dataRes.chartLine.data}
        options={dataRes.chartLine.options}
      ></LineChart>
    </Card>
  );
}

export default OverviewLineChart;
