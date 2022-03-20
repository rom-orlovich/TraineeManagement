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
  getPeriodDataBet2Dates,
} from "../../../helpers/DatesHelpers";
import {
  TimeLinePeriodValueType,
  propsType,
} from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";

import ST from "./FinancialChartBar.module.scss";
import HeaderChartBar from "./HeaderChartBar";
function FinancialChartBar({ className }: propsType & {}) {
  const [first, last] = getFirstAndLastDateMonth();
  const [timeLineDisplay, settimeLineDisplay] =
    useState<TimeLinePeriodValueType>("daily");
  const [fromInput, setFromInput] = useState(first);
  const [toInput, setToInput] = useState(last);
  // Have to fit the length of  the arrays that the function get to the difference of days between the two dates.
  let funObj = getPeriodDataBet2Dates(
    totalExample,
    incomeExample,
    expenseExample,
    timeLineDisplay,
    fromInput,
    toInput
  );

  const { labels, total, incomes, expenses } = funObj;
  const dataCharBar = {
    ...dataProvider["balance"].chartBar.data,
    datasets: [
      {
        ...dataProvider["balance"].chartBar.data.datasets[0],
        data: total,
      },
      {
        ...dataProvider["balance"].chartBar.data.datasets[1],
        data: incomes,
      },
      {
        ...dataProvider["balance"].chartBar.data.datasets[2],
        data: expenses,
      },
    ],
    labels: labels,
  };

  return (
    <ChartBar
      className={classNameMaker(className)}
      data={dataCharBar}
      options={dataProvider["balance"].chartBar.options}
      headerEl={
        <HeaderChartBar
          className={classNameMaker(ST.heading_card)}
          timeLineDisplay={timeLineDisplay}
          setTimeLineDisplay={settimeLineDisplay}
          setFromInput={setFromInput}
          setToInput={setToInput}
        />
      }
    ></ChartBar>
  );
}

export default FinancialChartBar;
