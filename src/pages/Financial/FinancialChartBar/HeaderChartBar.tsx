import React, { useState } from "react";
import SelectInput from "../../../components/Form/SelectInput/SelectInput";
import { optionSelect } from "../../../DummyData/DummyData";
import { PeriodType, propsType } from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";

function HeaderChartBar({
  className,
  setTypePeriod,
  setFromInput,
  setToInput,
}: propsType & {
  setTypePeriod: React.Dispatch<React.SetStateAction<PeriodType>>;
  setFromInput: React.Dispatch<React.SetStateAction<Date>>;
  setToInput: React.Dispatch<React.SetStateAction<Date>>;
}) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
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
            setFromInput(new Date(e.target.value));
          }}
          name="from"
          type="date"
        />
        <label htmlFor="to"> To </label>
        {bool && <span>*</span>}
        <input
          onChange={(e) => {
            setToInput(new Date(e.target.value));
          }}
          name="to"
          type="date"
        />
      </span>
    </div>
  );
}

export default HeaderChartBar;
