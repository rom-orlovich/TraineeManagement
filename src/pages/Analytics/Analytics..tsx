import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardData from "../../components/CardData/CardData";
import ChartPie from "../../components/Charts/ChartPie/ChartPie";

import DataGridTable from "../../components/DataGridTable/DataGridTable";
import {
  dataPie,
  dataProvider,
  optionSelect,
  TraineeTable,
} from "../../DummyData/DummyData";
import { propsType } from "../../helpers/GlobalType";
import { classNameMaker, mapEl } from "../../helpers/helperFunction";
import { useLocation } from "react-router";
import ST from "./Analytics.module.scss";
import ChartBar from "../../components/Charts/ChartBar/ChartBar";
import SelectInput from "../../components/Form/SelectInput/SelectInput";

function Analytics({ className }: propsType) {
  const [selectState, setSelectState] = useState("");

  let fitData =
    selectState === "leads"
      ? dataProvider.leads
      : selectState === "activities"
      ? dataProvider.activities
      : dataProvider.trainees;

  return (
    <section className={classNameMaker(ST.analytics_layout, className)}>
      <div className={classNameMaker(ST.upper_section)}>
        <div className={classNameMaker(ST.select_input)}>
          <SelectInput
            data={optionSelect[1]}
            SetValueOnChange={setSelectState}
          ></SelectInput>
        </div>
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

      <div className={classNameMaker(ST.lower_section)}>
        <ChartBar
          className={classNameMaker(ST.chart)}
          data={fitData.chartBar.data}
          options={fitData.chartBar.options}
          selectOptions={optionSelect[0]}
        ></ChartBar>
      </div>
    </section>
  );
}

export default Analytics;

{
  // className={classNameMaker(ST.chart)}
  /* <select
onChange={(e) => {
  setSelectState(e.target.value);
}}
id="select_displayStats"
name="select_display"
className={classNameMaker(ST.analytics_blocks)}
>
<option value=""> Select Option </option>
<option value="trainees"> Trainees </option>
<option value="leads"> Leads </option>
<option value="activities"> Activities </option>
</select> */
}
