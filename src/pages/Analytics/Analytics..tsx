import { optionSelect } from "../../DummyData/DummyData";
import {
  ActivitiesDataValueType,
  PageDataValueType,
  propsType,
  TimeLinePeriodValueType,
} from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";

import ChartBar from "../../components/Charts/ChartBar/ChartBar";

import { useGetManageSelectInputState } from "../../helpers/HelperHooks";
import { getAnalyticsData } from "./AnalyticsHelper";
import AnalyticsBlocks from "./AnalyticsBlocks/AnalyticsBlocks";
import ST from "./Analytics.module.scss";
import AnalyticsSelectInputs from "./AnalyticsSelectInputs/AnalyticsSelectInputsTypes";

function Analytics({ className }: propsType) {
  const { selectState: stateSelectPage, SelectInputEL: SelectInputPage } =
    useGetManageSelectInputState<PageDataValueType>(optionSelect[1]);
  const {
    selectState: stateSelectTimeline,
    SelectInputEL: SelectInputSelectTimeline,
  } = useGetManageSelectInputState<TimeLinePeriodValueType>(optionSelect[2]);
  const {
    selectState: stateSelectActivities,
    SelectInputEL: SelectInputActivities,
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
        <AnalyticsSelectInputs
          className={classNameMaker()}
          stateSelectPage={stateSelectPage}
          SelectInputActivities={SelectInputActivities}
          SelectInputSelectTimeline={SelectInputSelectTimeline}
          SelectInputPage={SelectInputPage}
        />
        <AnalyticsBlocks
          className={classNameMaker()}
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
