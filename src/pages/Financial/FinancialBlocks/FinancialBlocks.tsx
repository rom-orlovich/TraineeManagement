import CardData from "../../../components/CardData/CardData";

import { datesValue } from "../../../DummyData/DummyData";
import { propsType } from "../../../helpers/GlobalType";
import { mapEl, classNameMaker } from "../../../helpers/helperFunction";

function FinancialBlocks({
  className,
  blocksState,
}: propsType & { blocksState: typeof datesValue[0] }) {
  const financeBlocksObj = [
    {
      id: 1,
      heading: "Total Balance",
      text: blocksState?.total + "",
    },
    {
      id: 2,
      heading: "Incomes",
      text: blocksState?.income + "",
    },
    {
      id: 3,
      heading: "Expenses",
      text: blocksState?.expense + "",
    },
  ];

  return (
    <div className={classNameMaker(className)}>
      {mapEl(financeBlocksObj, ({ id, ...rest }) => (
        <CardData
          key={`cardData-${id}`}
          {...rest}
          symbolText={"$"}
          displayIndicatorPositive={id === 3 ? false : true}
          displayPrecentage={false}
        ></CardData>
      ))}
    </div>
  );
}

export default FinancialBlocks;
