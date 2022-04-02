import React, { ReactNode, useState } from "react";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../helpers/GlobalType";
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
import { SelectOptions } from "../../../DummyData/DummyDataType";
import {
  useFollowState,
  useGetManageSelectInputState,
} from "../../../helpers/HelperHooks";
function ChartBar({
  data,
  options,
  className,
  selectOptions,
  headerEl,
}: propsType & {
  data: ChartData<"bar", number[], unknown>;
  options?: ChartOptions<"bar">;
  selectOptions?: SelectOptions;
  headerEl?: ReactNode;
}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const { SelectInputEL, selectState } = useGetManageSelectInputState(
    selectOptions
      ? selectOptions
      : { name: "", options: [{ value: "", label: "" }] }
  );
  // useFollowState({ chartbar: "chartbar" }, { selectState });

  return (
    <Card className={classNameMaker(className)}>
      {headerEl || (
        <div className={classNameMaker(ST.heading_card)}>
          <SelectInputEL />
        </div>
      )}

      <div className={classNameMaker(ST.chartBar)}>
        <Bar
          style={{ position: "absolute", bottom: "6px" }}
          className={classNameMaker(className)}
          data={{
            ...data,
            labels: selectState
              ? data.labels?.slice(0, parseInt(selectState))
              : data.labels,
          }}
          options={options}
        ></Bar>
      </div>
    </Card>
  );
}

export default ChartBar;
