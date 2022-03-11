import { chartDataType } from "../../../DummyData/DummyDataType";
import { PageDataValueType } from "../../../helpers/GlobalType";

export type AnalyticsBlocksType = {
  cardInnerData: {
    timeLineCardText?: string | undefined;
    sumDisplayMonthlyText?: number | undefined;
    sumDisplayOneTimeText?: number | undefined;
  };
  chartPie: chartDataType<"pie">[];
  cardData:
    | never[]
    | {
        id: number;
        heading: string;
        text: string;
      }[];
  stateSelectPage: PageDataValueType;
};
