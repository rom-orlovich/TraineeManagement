import { useState } from "react";
import { dataProvider } from "../../DummyData/DummyData";
import {
  expensesMonthlyExample,
  expensesOneTimeExample,
  incomesMonthlyExample,
  incomesOneTimeExample,
} from "../../helpers/AppVariables";
import { getPeriodDataBet2Dates } from "../../helpers/DatesHelpers";
import {
  ActivitiesDataValueType,
  PageDataValueType,
  TimeLinePeriodValueType,
} from "../../helpers/GlobalType";
import { sumArray } from "../../helpers/helperFunction";


//make timeLine text in the select period
const timeLineTextMaker = (
  timeLine: TimeLinePeriodValueType,
  labels: string[]
) => {
  return `${
    timeLine === "daily"
      ? labels[0]
      : labels[0] + "-" + labels[labels.length - 1]
  }`;
};

/**
 *
 * @param stateSelectPage - the state of the select input of the page selector
 * @param stateSelectActivities  - the state of the select input of the activities selector
 * @param stateSelectTimeline - the state of the select input of the timeLine selector
 * @returns -obj data of the analytics page dataProvider-charts or card data, cardInnerData the data of card block if its exist
 */
export const getAnalyticsData = (
  stateSelectPage: PageDataValueType,
  stateSelectActivities: ActivitiesDataValueType,
  stateSelectTimeline: TimeLinePeriodValueType
) => {



  //defined the icnome and expense page Data structure
  const objIncomeExpensesData = {
    incomes: {
      dataProvider: dataProvider.activities.incomes,
      monthly: incomesMonthlyExample,
      oneTime: incomesOneTimeExample,
    },

    expenses: {
      dataProvider: dataProvider.activities.expenses,
      monthly: expensesMonthlyExample,
      oneTime: expensesOneTimeExample,
    },
  };
  //find a data of monthly and one time incomes or expenses between 2 dates
  const {
    labels,
    incomes: monthlyPeriodArr,
    expenses: oneTimePeriodArr,
  } = getPeriodDataBet2Dates(
    [],
    objIncomeExpensesData[stateSelectActivities].monthly,
    objIncomeExpensesData[stateSelectActivities].oneTime,
    stateSelectTimeline
  );
  //create the inner card data
  const cardInnerDataObj = {
    timeLineCardText: timeLineTextMaker(stateSelectTimeline, labels),
    sumDisplayMonthlyText: sumArray(monthlyPeriodArr),
    sumDisplayOneTimeText: sumArray(oneTimePeriodArr),
  };

  //make the page Data
  const pageData = {
    trainees: {
      dataProvider: dataProvider.trainees,
      cardInnerData: {},
    },
    leads: {
      dataProvider: dataProvider.leads,
      cardInnerData: {},
    },
    activities: {
      dataProvider: objIncomeExpensesData[stateSelectActivities].dataProvider,
      cardInnerData: { ...cardInnerDataObj },
    },
  };

  return pageData[stateSelectPage];
};
