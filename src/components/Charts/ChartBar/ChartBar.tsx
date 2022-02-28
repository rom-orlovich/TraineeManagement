import React, { useState } from "react";
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
import SelectInput from "../../Form/SelectInput/SelectInput";
import { optionSelector } from "../../../DummyData/DummyData";
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
  const [selectOption, setSelectOption] = useState("");
  return (
    <Card className={classNameMaker(className)}>
      <div className={classNameMaker(ST.heading_card)}>
        {/* <select id="select_preiod" name="select_preiod" onClick={() => {}}>
          <option value="">select option </option>
          <option value="3"> last 3 Month </option>
          <option value="6"> last 6 Month</option>
          <option value="12"> last 12 Month</option>
        </select> */}
        <SelectInput
          data={optionSelector[0]}
          fun={setSelectOption}
        ></SelectInput>
      </div>

      <div className={classNameMaker(ST.chartBar)}>
        <Bar
          data={{
            ...data,
            labels: data.labels?.slice(0, parseInt(selectOption) - 1),
          }}
          options={options}
        ></Bar>
      </div>
    </Card>
  );
}

export default ChartBar;
