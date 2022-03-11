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

import { cardData, chartDataType } from "../../DummyData/DummyDataType";
import CardData from "../../components/CardData/CardData";

import { useGetManageSelectInputState } from "../../helpers/HelperHooks";
import { getAnalyticsData } from "./AnalyticsHelper";
import AnalyticsBlocks from "./AnalyticsBlocks/AnalyticsBlocks";
import ST from "./Analytics.module.scss";
function Analytics({ className }: propsType) {
  const {
    state: stateSelectPage,

    el: SelectInputPage,
  } = useGetManageSelectInputState<PageDataValueType>(optionSelect[1]);
  const {
    state: stateSelectTimeline,

    el: SelectInputSelectTimeline,
  } = useGetManageSelectInputState<TimeLinePeriodValueType>(optionSelect[2]);
  const {
    state: stateSelectActivities,

    el: SelectInputActivities,
  } = useGetManageSelectInputState<ActivitiesDataValueType>(optionSelect[3]);

  const { dataProvider: analyticsData, cardInnerData } = getAnalyticsData(
    stateSelectPage,
    stateSelectActivities,
    stateSelectTimeline
  );
  const { cardData, chartPie, chartBar } = analyticsData;

  return (
    <section className={classNameMaker(ST.analytics_layout, className)}>
      <div className={classNameMaker(ST.upper_section)}>
        <div className={classNameMaker(ST.select_inputs)}>
          <SelectInputPage />
          {stateSelectPage === "activities" ? (
            <>
              <SelectInputActivities
                className={classNameMaker(ST.select_inputs_activities)}
              />

              <SelectInputSelectTimeline
                className={classNameMaker(ST.select_inputs_timeLine)}
              />
            </>
          ) : (
            <></>
          )}
        </div>

        <AnalyticsBlocks
          cardInnerData={cardInnerData}
          cardData={cardData}
          chartPie={chartPie}
          stateSelectPage={stateSelectPage}
        />
      </div>

      <div className={classNameMaker(ST.lower_section)}>
        <ChartBar
          className={classNameMaker(ST.chart)}
          data={chartBar.data}
          options={chartBar.options}
          selectOptions={optionSelect[0]}
        ></ChartBar>
      </div>
    </section>
  );
}

export default Analytics;
