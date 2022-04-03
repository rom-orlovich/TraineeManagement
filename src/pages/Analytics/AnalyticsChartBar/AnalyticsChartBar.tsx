import { ChartData, ChartOptions } from "chart.js";
import React from "react";
import ChartBar from "../../../components/Charts/ChartBar/ChartBar";
import { SelectOptions } from "../../../DummyData/DummyDataType";
import { classNameMaker } from "../../../helpers/helperFunction";
import {
  useFollowState,
  useGetManageSelectInputState,
} from "../../../helpers/HelperHooks";
import ST from "./AnalyticsChartBar.module.scss";
function AnalyticsChartBar({
  selectOptions,
  data,
  options,
}: {
  data: ChartData<"bar", number[], unknown>;
  options?: ChartOptions<"bar">;
  selectOptions: SelectOptions;
}) {
  type typePeriod = "3" | "6" | "12";
  const { SelectInputEL, selectState } =
    useGetManageSelectInputState(selectOptions);

  const headerEl = (
    <div className={classNameMaker(ST.heading_card)}>
      <SelectInputEL />
    </div>
  );

  const [dataSetJoin, dataSetLeft, dataSetTotal] = data.datasets;
  const dataRes: ChartData<"bar", number[], unknown> = {
    datasets: [
      {
        ...dataSetJoin,
        data: dataSetJoin.data.slice(0, parseInt(selectState)),
      },
      {
        ...dataSetLeft,
        data: dataSetLeft.data.slice(0, parseInt(selectState)),
      },
      {
        ...dataSetTotal,
        data: dataSetTotal.data.slice(0, parseInt(selectState)),
      },
    ],
    labels: data.labels?.slice(0, parseInt(selectState)),
  };
  useFollowState({ dataRes });
  return (
    <>
      <ChartBar
        className={classNameMaker(ST.chart)}
        data={dataRes}
        options={options}
        headerEl={headerEl}
      ></ChartBar>
    </>
  );
}

export default AnalyticsChartBar;
