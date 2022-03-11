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
  //make timeLine text in the select period
  const timeLineTextMaker = (timeLine: string, labels: string[]) => {
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

        cardInnerData: {},
      };
    }

    case "leads": {
      return {
        dataProvider: dataProvider.leads,

        cardInnerData: {},
      };
    }

    case "activities": {
      let IncomesOrExpensesData =
        stateSelectActivities === "incomes"
          ? {
              dataProvider: dataProvider.activities.incomes,
              monthly: incomesMonthlyExample,
              oneTime: incomesOneTimeExample,
            }
          : {
              dataProvider: dataProvider.activities.expenses,
              monthly: expensesMonthlyExample,
              oneTime: expensesOneTimeExample,
            };

      //find a data of monthly and one time incomes or expenses between 2 dates
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

        cardInnerData: {
          timeLineCardText: timeLineTextMaker(stateSelectTimeline, labels),
          sumDisplayMonthlyText: sumArray(monthlyPeriodArr),
          sumDisplayOneTimeText: sumArray(oneTimePeriodArr),
        },
      };
    }
  }
};
