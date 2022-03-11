import React, { useEffect, useState } from "react";
import SelectInput from "../../../components/Form/SelectInput/SelectInput";
import { optionSelect } from "../../../DummyData/DummyData";
import {
  TimeLinePeriodValueType,
  propsType,
} from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";
import { getFirstAndLastDateMonth } from "../../../helpers/DatesHelpers";
import { borderColor } from "@mui/system";
function HeaderChartBar({
  className,
  setTypePeriod,
  setFromInput,
  setToInput,
}: propsType & {
  setTypePeriod: React.Dispatch<React.SetStateAction<TimeLinePeriodValueType>>;
  setFromInput: React.Dispatch<React.SetStateAction<Date>>;
  setToInput: React.Dispatch<React.SetStateAction<Date>>;
}) {
  const [first] = getFirstAndLastDateMonth();
  const [from, setFrom] = useState<Date>(first);
  const [to, setTo] = useState<Date>(first);
  const [bool, setBool] = useState(false);

  return (
    <div className={classNameMaker(className)}>
      <span>
        <label htmlFor={optionSelect[2].name}>{optionSelect[2].name} </label>
        <SelectInput
          data={optionSelect[2]}
          SetValueOnChange={(value) => {
            setTypePeriod(value);
          }}
        ></SelectInput>
      </span>

      <span>
        <label htmlFor="from"> From </label>
        <input
          onChange={(e) => {
            let date = new Date(e.target.value);
            setFrom(date);
            setFromInput(date);
            setBool(date > to);
          }}
          name="from"
          type="date"
        />
        <label htmlFor="to"> To </label>
        {bool && <span>*</span>}
        <input
          onChange={(e) => {
            let date = new Date(e.target.value);
            setTo(date);
            setToInput((pre) => {
              let res = date > from ? date : pre;
              return res;
            });
            setBool(date < from);
          }}
          style={{
            borderColor: `${bool ? "red" : "initial"}`,
            outlineColor: `${bool ? "red" : "initial"}`,
          }}
          name="to"
          type="date"
        />
      </span>
    </div>
  );
}

export default HeaderChartBar;
