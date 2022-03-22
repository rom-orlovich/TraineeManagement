import { classNameMaker } from "../../../helpers/helperFunction";

import { AnalyticsSelectInputsType } from "./AnalyticsSelectInputs";
import ST from "./AnalyticsSelectInputs.module.scss";
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
