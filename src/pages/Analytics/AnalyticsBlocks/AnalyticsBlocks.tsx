import ChartPie from "../../../components/Charts/ChartPie/ChartPie";

import { propsType } from "../../../helpers/GlobalType";
import { classNameMaker, mapEl } from "../../../helpers/helperFunction";

import { cardData, chartDataType } from "../../../DummyData/DummyDataType";
import CardData from "../../../components/CardData/CardData";
import ST from "./AnalyticsBlocks.module.scss";

import { AnalyticsBlocksType } from "./AnalyticsBlocksType";
function AnalyticsBlocks({
  cardInnerData,
  chartPie,
  cardData,
  stateSelectPage,
  className,
}: AnalyticsBlocksType & propsType) {
  const ChartPieEl = ({ name, ...rest }: chartDataType<"pie">) => {
    return (
      <ChartPie
        key={name}
        heading={name}
        className={classNameMaker(ST.stats_block)}
        {...rest}
      ></ChartPie>
    );
  };
  const cardDataEl = ({ id, text, heading }: cardData) => (
    <CardData
      key={`cardData-${id}`}
      text={text}
      heading={heading}
      symbolText={"$"}
      timeLine={cardInnerData.timeLineCardText}
      displayIndicator
      displayPrecentage={false}
    ></CardData>
  );
  const cardDataArr = [
    {
      ...cardData[0],
      text: cardInnerData.sumDisplayMonthlyText + "",
    },
    {
      ...cardData[1],
      text: cardInnerData.sumDisplayOneTimeText + "",
    },
  ];

  return (
    <div className={classNameMaker(ST.analytics_blocks)}>
      {stateSelectPage === "activities" ? (
        mapEl(cardDataArr, cardDataEl)
      ) : (
        <></>
      )}
      {mapEl(chartPie, ChartPieEl)}
    </div>
  );
}

export default AnalyticsBlocks;
