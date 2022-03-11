import { useState } from "react";

import ChartPie from "../../components/Charts/ChartPie/ChartPie";

import { dataProvider, optionSelect } from "../../DummyData/DummyData";
import {
  ActivitiesDataValueType,
  PageDataValueType,
  propsType,
  TimeLinePeriodValueType,
} from "../../helpers/GlobalType";
import { classNameMaker, mapEl, sumArray } from "../../helpers/helperFunction";

import ChartBar from "../../components/Charts/ChartBar/ChartBar";
import SelectInput from "../../components/Form/SelectInput/SelectInput";
import { cardData, chartDataType } from "../../DummyData/DummyDataType";
import CardData from "../../components/CardData/CardData";
import ST from "./Analytics.module.scss";
import { getPeriodDataBet2Dates } from "../../helpers/DatesHelpers";
import {
  expenseExample,
  expensesMonthlyExample,
  expensesOneTimeExample,
  incomeExample,
  incomesMonthlyExample,
  incomesOneTimeExample,
  totalExample,
} from "../../helpers/AppVariables";
import { useGetManageSelectInputState } from "../../helpers/HelperHooks";
function Analytics({ className }: propsType) {
  const [selectStatePage, setSelectStatePage] = useState("trainees");
  const [selectActivities, setSelectActivities] = useState<
    "incomes" | "expenses"
  >("incomes");

  const [selectTimeLine, setSelectTimeLine] =
    useState<TimeLinePeriodValueType>("daily");

  const {
    state: stateSelectPage,
    setState: setStateSelectPage,
    el: SelectInputPage,
  } = useGetManageSelectInputState<PageDataValueType>(optionSelect[1]);
  const {
    state: stateSelectTimeline,
    setState: setStateSelectTimeline,
    el: SelectInputSelectTimeline,
  } = useGetManageSelectInputState<TimeLinePeriodValueType>(optionSelect[2]);
  const {
    state: stateSelectActivities,
    setState: setStateSelectActivities,
    el: SelectInputActivities,
  } = useGetManageSelectInputState<ActivitiesDataValueType>(optionSelect[3]);

  let fitData =
    stateSelectPage === "leads"
      ? dataProvider.leads
      : stateSelectPage === "activities"
      ? stateSelectActivities === "incomes"
        ? dataProvider.activities.incomes
        : dataProvider.activities.expenses
      : dataProvider.trainees;
  let selectActivitiesDisplay =
    stateSelectActivities === "incomes"
      ? { arr1: incomesMonthlyExample, arr2: incomesOneTimeExample }
      : { arr1: expensesMonthlyExample, arr2: expensesOneTimeExample };

  const {
    labels,
    incomes: monthlyPeriodArr,
    expenses: oneTimePeriodArr,
  } = getPeriodDataBet2Dates(
    [],
    selectActivitiesDisplay.arr1,
    selectActivitiesDisplay.arr2,
    stateSelectTimeline
  );

  let timeLine = `${
    stateSelectTimeline === "daily"
      ? labels[0]
      : labels[0] + "-" + labels[labels.length - 1]
  }`;

  let sumDisplayMonthly = sumArray(monthlyPeriodArr);
  let sumDisplayOneTime = sumArray(oneTimePeriodArr);
  let ChartPieEl = ({ name, ...rest }: chartDataType<"pie">) => {
    return (
      <ChartPie
        key={name}
        heading={name}
        className={classNameMaker(ST.stats_block)}
        {...rest}
      ></ChartPie>
    );
  };
  let cardDataEl = ({ id, text, ...rest }: cardData) => (
    <CardData
      key={`cardData-${id}`}
      text={text}
      {...rest}
      symbolText={"$"}
      timeLine={timeLine}
      displayIndicator
      displayPrecentage={false}
    ></CardData>
  );

  return (
    <section className={classNameMaker(ST.analytics_layout, className)}>
      <div className={classNameMaker(ST.upper_section)}>
        <div className={classNameMaker(ST.select_input)}>
          <SelectInputPage />
          {stateSelectPage === "activities" ? (
            <>
              <SelectInputActivities
                className={classNameMaker(ST.select_input_activities)}
              />

              <SelectInputSelectTimeline />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className={classNameMaker(ST.analytics_blocks)}>
          {stateSelectPage === "activities" ? (
            mapEl(
              [
                {
                  ...fitData.cardData[0],
                  text: sumDisplayMonthly + "",
                },
                {
                  ...fitData.cardData[1],
                  text: sumDisplayOneTime + "",
                },
              ],
              cardDataEl
            )
          ) : (
            <></>
          )}
          {mapEl(fitData.chartPie, ChartPieEl)}
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
