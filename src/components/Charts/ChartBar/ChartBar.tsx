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

import SelectInput from "../../Form/SelectInput/SelectInput";
import { optionSelect } from "../../../DummyData/DummyData";
import ST from "./ChartBar.module.scss";
import { SelectOptions } from "../../../DummyData/DummyDataType";
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

  const [selectOption, setSelectOption] = useState(
    selectOptions ? `${selectOptions.options.length}` : ""
  );

  return (
    <Card className={classNameMaker(className)}>
      {headerEl || (
        <div className={classNameMaker(ST.heading_card)}>
          {selectOptions && (
            <SelectInput
              data={selectOptions}
              SetValueOnChange={setSelectOption}
            ></SelectInput>
          )}
        </div>
      )}

      <div className={classNameMaker(ST.chartBar)}>
        <Bar
          style={{ position: "absolute" }}
          className={classNameMaker(className)}
          data={{
            ...data,
            labels: selectOption
              ? data.labels?.slice(0, parseInt(selectOption))
              : data.labels,
          }}
          options={options}
        ></Bar>
      </div>
    </Card>
  );
}

export default ChartBar;
{
  /* <select id="select_preiod" name="select_preiod" onClick={() => {}}>
          <option value="">select option </option>
          <option value="3"> last 3 Month </option>
          <option value="6"> last 6 Month</option>
          <option value="12"> last 12 Month</option>
        </select> */
}
