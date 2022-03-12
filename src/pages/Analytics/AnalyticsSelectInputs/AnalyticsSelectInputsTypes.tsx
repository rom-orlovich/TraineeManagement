import { classNameMaker } from "../../../helpers/helperFunction";

import ST from "./AnalyticsSelectInputs.module.scss";
import { AnalyticsSelectInputsType } from "./AnalyticsSelectInputs";

function AnalyticsSelectInputs({
  className,
  stateSelectPage,
  SelectInputPage,
  SelectInputActivities,
  SelectInputSelectTimeline,
}: AnalyticsSelectInputsType) {
  return (
    <div className={classNameMaker(ST.select_inputs, className)}>
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
  );
}

export default AnalyticsSelectInputs;
