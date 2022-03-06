import React from "react";
import { useState } from "react";

import CardData from "../../components/CardData/CardData";

import {
  dataPie,
  dataProvider,
  datesValue,
  optionSelect,
} from "../../DummyData/DummyData";
import { PeriodType, propsType } from "../../helpers/GlobalType";
import { mapEl, classNameMaker } from "../../helpers/helperFunction";

import ChartBar from "../../components/Charts/ChartBar/ChartBar";
import SelectInput from "../../components/Form/SelectInput/SelectInput";

import Card from "../../components/UI/Card/Card";
import ST from "./Financial.module.scss";
import {
  expenseExample,
  incomeExample,
  totalExample,
} from "../../helpers/AppVariables";
import {
  getThisMonth,
  localDate,
  globalDate,
  getPointSliceThisWeek,
  getLocalDateFromInput,
  getPeriodBet2Dates,
} from "../../helpers/DatesHelpers";

let findData = datesValue.find((el) => el.id === localDate);
function Financial({ className }: propsType) {
  const [curDateValue, setCurDateValue] = useState(globalDate);

  const [financeDateState, setFinanceDateState] = useState<
    typeof datesValue[0]
  >(findData!);

  const [typePeriod, setTypePeriod] = useState<PeriodType>("days");
  const headerEl = (
    <div className={classNameMaker(ST.heading_card)}>
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
        <input name="from" type="date" />
        <label htmlFor="to"> To </label>
        <input name="to" type="date" />
      </span>
    </div>
  );

  const { labels, total, incomes, expenses } = getPeriodBet2Dates(
    totalExample,
    incomeExample,
    expenseExample,
    typePeriod
  );
  const labelsPoints = labels;

  let totalData = total;

  let incomesData = incomes;

  let expensesData = expenses;

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
              console.log(e.target.value);
              let findDataNew =
                datesValue.find(
                  (el) => el.id === getLocalDateFromInput(e.target.value)
                ) || financeDateState;
              setFinanceDateState(findDataNew);
              setCurDateValue(e.target.value);
            }}
          />
        </div>
        <div className={classNameMaker(ST.financial_blocks)}>
          {mapEl(
            [
              {
                id: 1,
                heading: "Total Balance",
                text: financeDateState?.total + "",
              },
              {
                id: 2,
                heading: "Incomes",
                text: financeDateState?.income + "",
              },
              {
                id: 3,
                heading: "Expenses",
                text: financeDateState?.expense + "",
              },
            ],
            ({ id, ...rest }) => (
              <CardData
                key={`cardData-${id}`}
                {...rest}
                symbolText={"$"}
                displayIndicatorPositive={id === 3 ? false : true}
                displayPrecentage={false}
              ></CardData>
            )
          )}
        </div>
      </div>

      <div className={classNameMaker(ST.lower_section)}>
        <ChartBar
          className={classNameMaker(ST.chart)}
          data={{
            ...dataProvider["Balance"].chartBar.data,
            datasets: [
              {
                ...dataProvider["Balance"].chartBar.data.datasets[0],
                data: totalData,
              },
              {
                ...dataProvider["Balance"].chartBar.data.datasets[1],
                data: incomesData,
              },
              {
                ...dataProvider["Balance"].chartBar.data.datasets[2],
                data: expensesData,
              },
            ],
            labels: labelsPoints,
          }}
          options={dataProvider["Balance"].chartBar.options}
          headerEl={headerEl}
        ></ChartBar>
      </div>
    </section>
  );
}

export default Financial;
