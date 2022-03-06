import { useState } from "react";

import { datesValue } from "../../DummyData/DummyData";
import { propsType } from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";

import {
  localDate,
  globalDate,
  getLocalDateFromInput,
} from "../../helpers/DatesHelpers";
import FinancialBlocks from "./FinancialBlocks/FinancialBlocks";
import FinancialChartBar from "./FinancialChartBar/FinancialChartBar";
import ST from "./Financial.module.scss";

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
          <label htmlFor="chooseDate"> Choose Date </label>
          <input
            type="date"
            name="chooseDate"
            value={curDateValue}
            onChange={(e) => {
              let findDataNew =
                datesValue.find(
                  (el) => el.id === getLocalDateFromInput(e.target.value)
                ) || financeDateState;
              setFinanceDateState(findDataNew);
              setCurDateValue(e.target.value);
            }}
          />
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
