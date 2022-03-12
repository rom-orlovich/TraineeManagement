import {
  JSXcomponentType,
  PageDataValueType,
  propsType,
} from "../../../helpers/GlobalType";

export type AnalyticsSelectInputsType = propsType & {
  stateSelectPage: PageDataValueType;
  SelectInputPage: JSXcomponentType;
  SelectInputActivities: JSXcomponentType;
  SelectInputSelectTimeline: JSXcomponentType;
};
