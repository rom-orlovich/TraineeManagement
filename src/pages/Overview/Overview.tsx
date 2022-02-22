import React, { useState } from "react";

import Card from "../../components/UI/Card/Card";

import { classNameMaker } from "../../helpers/helperFunction";
import { propsType } from "../../helpers/GlobalType";

import CardData from "../../components/CardData/CardData";
import DailyTasks from "./DailyTasks/DailyTasks";

import {
  columns,
  OverviewLineChartData,
  rows,
} from "../../DummyData/DummyData";

import ST from "./Overview.module.scss";
import OverviewLineBar from "./OverviewLineBar/OverviewLineChart";
import OverviewLineChart from "./OverviewLineBar/OverviewLineChart";
import DataGridTable from "../../components/DataGridTable/DataGridTable";
function Overview({ className }: propsType) {
  return (
    <section className={classNameMaker(ST.overview_Layout)}>
      <div className={classNameMaker(ST.card_blocks)}>
        <CardData heading="Todal Trainees" text="1" change="3"></CardData>

        <CardData heading="Today leads" text="0" change="0"></CardData>
        <CardData heading="Balance" text="0 Nis" change="-3"></CardData>
      </div>
      <div className={classNameMaker(ST.data_charts)}>
        {/* <DailyTasks className={classNameMaker(ST.dailyTasks)} /> */}
        <DataGridTable
          columns={columns}
          rows={rows}
          heading="Daily Tasks"
          className={classNameMaker(ST.dailyTasks)}
          displayDate
        ></DataGridTable>

        <OverviewLineChart
          data={OverviewLineChartData}
          className={classNameMaker(ST.charts_display)}
        ></OverviewLineChart>
      </div>
    </section>
  );
}

export default Overview;
