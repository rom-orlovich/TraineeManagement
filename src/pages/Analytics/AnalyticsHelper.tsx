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

const getAnalyticsData = (
  stateSelectPage: PageDataValueType,
  stateSelectActivities: ActivitiesDataValueType,
  stateSelectTimeline: TimeLinePeriodValueType
) => {
  const timeLineCardDataMaker = (timeLine: string, labels: string[]) => {
    return `${
      stateSelectTimeline === "daily"
        ? labels[0]
        : labels[0] + "-" + labels[labels.length - 1]
    }`;
  };

  switch (stateSelectPage) {
    case "trainees": {
      return {
        dataProvider: dataProvider.trainees,
        arrMonthlyPeriod: [],
        arrOneTimePeriod: [],
        cardData: {},
      };
    }

    case "leads": {
      return {
        dataProvider: dataProvider.leads,
        arrMonthlyPeriod: [],
        arrOneTimePeriod: [],
        cardData: {},
      };
    }

    case "activities": {
      let IncomesOrExpensesData =
        stateSelectActivities === "incomes"
          ? {
              data: dataProvider.activities.incomes,
              monthly: incomesMonthlyExample,
              oneTime: incomesOneTimeExample,
            }
          : {
              dataProvider: dataProvider.activities.expenses,
              monthly: expensesMonthlyExample,
              oneTime: expensesOneTimeExample,
            };
      const {
        labels,
        incomes: monthlyPeriodArr,
        expenses: oneTimePeriodArr,
      } = getPeriodDataBet2Dates(
        [],
        IncomesOrExpensesData.monthly,
        IncomesOrExpensesData.oneTime,
        stateSelectTimeline
      );

      return {
        dataProvider: IncomesOrExpensesData.dataProvider,
        arrMonthlyPeriod: monthlyPeriodArr,
        arrOneTimePeriod: oneTimePeriodArr,

        cardData: {
          timeLineCard: timeLineCardDataMaker(stateSelectTimeline, labels),
          sumDisplayMonthly: sumArray(monthlyPeriodArr),
          sumDisplayOneTime: sumArray(oneTimePeriodArr),
        },
      };
    }
    default: {
      return {};
    }
  }
};
