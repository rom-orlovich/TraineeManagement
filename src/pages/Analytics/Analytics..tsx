import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardData from "../../components/CardData/CardData";
import ChartPie from "../../components/Charts/ChartPie/ChartPie";

import DataGridTable from "../../components/DataGridTable/DataGridTable";
import { dataPie, dataProvider, TraineeTable } from "../../DummyData/DummyData";
import { propsType } from "../../helpers/GlobalType";
import { classNameMaker, mapEl } from "../../helpers/helperFunction";
import { useLocation } from "react-router";
import ST from "./Analytics.module.scss";
import ChartBar from "../../components/Charts/ChartBar/ChartBar";
function Analytics({ className }: propsType) {
  const [selectState, setSelectState] = useState("");
  // const location = useLocation();
  // const type = location.pathname.slice(1).split("/")[0];
  // console.log(type);
  let fitData =
    selectState === "leads"
      ? dataProvider.leads
      : selectState === "activities"
      ? dataProvider.activities
      : dataProvider.trainees;

  return (
    <section className={classNameMaker(className)}>
      <div className={classNameMaker(ST.select_display)}>
        <select
          onChange={(e) => {
            setSelectState(e.target.value);
          }}
          id="select_displayStats"
          name="select_display"
        >
          <option value=""> Select Option </option>
          <option value="trainees"> Trainees </option>
          <option value="leads"> Leads </option>
          <option value="activities"> Activities </option>
        </select>
      </div>
      <div className={classNameMaker(ST.analytics_layout)}>
        <div className={classNameMaker(ST.analytics_blocks)}>
          {mapEl(fitData.chartPie, ({ name, ...rest }) => {
            return (
              <ChartPie
                key={name}
                heading={name}
                className={classNameMaker(ST.stats_block)}
                {...rest}
              ></ChartPie>
            );
          })}
        </div>
      </div>

      <ChartBar
        className={classNameMaker(ST.chart)}
        data={fitData.chartBar.data}
        options={fitData.chartBar.options}
      >
        {" "}
      </ChartBar>
    </section>
  );
}

export default Analytics;
