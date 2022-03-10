import { useEffect, useState } from "react";

import ChartBar from "../../../components/Charts/ChartBar/ChartBar";

import { dataProvider } from "../../../DummyData/DummyData";
import {
  expenseExample,
  incomeExample,
  totalExample,
} from "../../../helpers/AppVariables";
import {
  getFirstAndLastDateMonth,
  getGlobalDate,
  getPeriodBet2Dates,
  globalDate,
} from "../../../helpers/DatesHelpers";
import { TimeLinePeriod, propsType } from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";

import ST from "./FinancialChartBar.module.scss";
import HeaderChartBar from "./HeaderChartBar";
function FinancialChartBar({ className }: propsType & {}) {
  const [first, last] = getFirstAndLastDateMonth();
  const [typePeriod, setTypePeriod] = useState<TimeLinePeriod>("daily");
  const [fromInput, setFromInput] = useState(first);
  const [toInput, setToInput] = useState(last);
  let funObj = getPeriodBet2Dates(
    totalExample,
    incomeExample,
    expenseExample,
    typePeriod,
    fromInput,
    toInput
  );

  const { labels, total, incomes, expenses } = funObj;
  const dataCharBar = {
    ...dataProvider["Balance"].chartBar.data,
    datasets: [
      {
        ...dataProvider["Balance"].chartBar.data.datasets[0],
        data: total,
      },
      {
        ...dataProvider["Balance"].chartBar.data.datasets[1],
        data: incomes,
      },
      {
        ...dataProvider["Balance"].chartBar.data.datasets[2],
        data: expenses,
      },
    ],
    labels: labels,
  };

  return (
    <ChartBar
      className={classNameMaker(className)}
      data={dataCharBar}
      options={dataProvider["Balance"].chartBar.options}
      headerEl={
        <HeaderChartBar
          className={classNameMaker(ST.heading_card)}
          setTypePeriod={setTypePeriod}
          setFromInput={setFromInput}
          setToInput={setToInput}
        />
      }
    ></ChartBar>
  );
}

export default FinancialChartBar;
