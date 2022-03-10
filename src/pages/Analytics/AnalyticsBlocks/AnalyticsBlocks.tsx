import { useState } from "react";

// import ChartPie from "../../../components/Charts/ChartPie/ChartPie";

// import { dataProvider, optionSelect } from "../../../DummyData/DummyData";
// import { TimeLinePeriod, propsType } from "../../../helpers/GlobalType";
// import { classNameMaker, mapEl, sumArray } from "../../../helpers/helperFunction";

// import ChartBar from "../../../components/Charts/ChartBar/ChartBar";
// import SelectInput from "../../../components/Form/SelectInput/SelectInput";
// import { cardData, chartDataType } from "../../../DummyData/DummyDataType";
// import CardData from "../../../components/CardData/CardData";
// import ST from "./AnalyticsBlocks.module.scss";
// import { getPeriodBet2Dates } from "../../../helpers/DatesHelpers";
// import {
//   expenseExample,
//   expensesMonthlyExample,
//   expensesOneTime,
//   incomeExample,
//   incomesMonthlyExample,
//   incomesOneTime,
//   totalExample,
// } from "../../../helpers/AppVariables";
// import { ReactDispatchType } from "../../../components/DataGridTable/DataGridTypes";
// function AnalyticsBlocks({ className,setSelectStatePage,setSelectActivities,setSelectTimeLine }: propsType&{
//   setSelectStatePage:ReactDispatchType
//   setSelectActivities:ReactDispatchType
//   setSelectTimeLine:ReactDispatchType
// }) {
//   const [selectTimeLine, setSelectTimeLine] = useState<TimeLinePeriod>("daily");
//   let fitData =
//     selectStatePage === "leads"
//       ? dataProvider.leads
//       : selectStatePage === "activities"
//       ? selectActivities === "incomes"
//         ? dataProvider.activities.incomes
//         : dataProvider.activities.expenses
//       : dataProvider.trainees;
//   let selectActivitiesDisplay =
//     selectActivities === "incomes"
//       ? { arr1: incomesMonthlyExample, arr2: incomesOneTime }
//       : { arr1: expensesMonthlyExample, arr2: expensesOneTime };
//   const {
//     labels,
//     incomes: monthlyPeriodArr,
//     expenses: oneTimePeriodArr,
//   } = getPeriodBet2Dates(
//     [],
//     selectActivitiesDisplay.arr1,
//     selectActivitiesDisplay.arr2,
//     selectTimeLine
//   );

//   let timeLine = `${
//     selectTimeLine === "daily"
//       ? labels[0]
//       : labels[0] + "-" + labels[labels.length - 1]
//   }`;

//   let sumDisplayMonthly = sumArray(incomes);
//   let sumDisplayOneTime = sumArray(expenses);

//   let cardDataContent=        [
//     {
//       ...fitData.cardData[0],
//       text: sumDisplayMonthly + "",
//     },
//     {
//       ...fitData.cardData[1],
//       text: sumDisplayOneTime + "",
//     },
//   ];
//   let ChartPieEl = ({ name, ...rest }: chartDataType<"pie">) => {
//     return (
//       <ChartPie
//         key={name}
//         heading={name}
//         className={classNameMaker(ST.stats_block)}
//         {...rest}
//       ></ChartPie>
//     );
//   };
//   let cardDataEl = ({ id, text, ...rest }: cardData) => (
//     <CardData
//       key={`cardData-${id}`}
//       text={text}
//       {...rest}
//       symbolText={"$"}
//       timeLine={timeLine}
//       displayIndicator
//       displayPrecentage={false}
//     ></CardData>
//   );

//   return (
//     <section className={classNameMaker(ST.analytics_layout, className)}>
//       <div className={classNameMaker(ST.upper_section)}>
//         <div className={classNameMaker(ST.select_input)}>
//           <SelectInput
//             data={optionSelect[1]}
//             SetValueOnChange={setSelectStatePage}
//           ></SelectInput>
//           {selectStatePage === "activities" ?
//             <>
//             <SelectInput
//               className={classNameMaker(ST.select_input_activities)}
//               data={optionSelect[3]}
//               SetValueOnChange={setSelectActivities}
//             ></SelectInput>

//             <SelectInput
//               className={classNameMaker(ST.select_input_activities)}
//               data={optionSelect[2]}
//               SetValueOnChange={setSelectTimeLine}
//             ></SelectInput>
//           </> : <></>}
//         </div>
//         <div className={classNameMaker(ST.analytics_blocks)}>
//           {selectStatePage === "activities" ? (
//             mapEl(
//               cardDataContent,
//               cardDataEl
//             )
//           ) : (
//             <></>
//           )}
//           {mapEl(fitData.chartPie, ChartPieEl)}
//         </div>
//       </div>

//     </section>
//   );
// }

// export default AnalyticsBlocks;
