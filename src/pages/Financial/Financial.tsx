import { useState } from "react";

import { datesValue } from "../../DummyData/DummyData";
import { propsType } from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";

import {
  localDate,
  globalDate,
  getLocalDateFromInput,
  getGlobalDate,
} from "../../helpers/DatesHelpers";
import FinancialBlocks from "./FinancialBlocks/FinancialBlocks";
import FinancialChartBar from "./FinancialChartBar/FinancialChartBar";
import ST from "./Financial.module.scss";

import DatePickerMui from "../../components/MUI/FormCompnents/DatePickerMui/DatePickerMui";

let findData = datesValue.find((el) => el.id === localDate);
function Financial({ className }: propsType) {
  const [curDateValue, setCurDateValue] = useState(globalDate);

  const [financeDateState, setFinanceDateState] = useState<
    typeof datesValue[0]
  >(findData!);

  return (
    <section className={classNameMaker(ST.financial_layout, className)}>
      <div className={classNameMaker(ST.upper_section)}>
        <div className={classNameMaker(ST.select_input)}>
          <DatePickerMui
            value={new Date(curDateValue)}
            onChange={(date: unknown) => {
              let DateNew = date as Date;
              let dateLocalString = DateNew?.toLocaleDateString() || "";

              let findDataNew =
                datesValue.find(
                  (el) => el.id === getLocalDateFromInput(dateLocalString)
                ) || financeDateState;

              setFinanceDateState(findDataNew);
              setCurDateValue(getGlobalDate(dateLocalString));
            }}
            textFieldProps={{
              label: "Choose Date",
              name: "choose date",
              style: { width: "10rem" },
            }}
          ></DatePickerMui>
        </div>

        <FinancialBlocks
          blocksState={financeDateState}
          className={classNameMaker(ST.financial_blocks)}
        ></FinancialBlocks>
      </div>

      <div className={classNameMaker(ST.lower_section)}>
        <FinancialChartBar className={classNameMaker(ST.chart)} />
      </div>
    </section>
  );
}

export default Financial;
