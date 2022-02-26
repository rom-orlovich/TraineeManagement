import React, { useState } from "react";

import Card from "../../components/UI/Card/Card";

import { classNameMaker } from "../../helpers/helperFunction";
import { propsType } from "../../helpers/GlobalType";

import CardData from "../../components/CardData/CardData";

import { DailyTask, OverviewLineChartData } from "../../DummyData/DummyData";

import OverviewLineChart from "./OverviewLineBar/OverviewLineChart";
import DataGridTable from "../../components/DataGridTable/DataGridTable";
import ST from "./Overview.module.scss";
function Overview({ className }: propsType) {
  const { columns, rows } = DailyTask;
  return (
    <section className={classNameMaker(ST.overview_Layout)}>
      <div className={classNameMaker(ST.card_blocks)}>
        <CardData
          className={classNameMaker(ST.block_data)}
          heading="Todal Trainees"
          text="1"
          change="3"
        ></CardData>

        <CardData
          className={classNameMaker(ST.block_data)}
          heading="Today leads"
          text="0"
          change="0"
        ></CardData>
        <CardData
          className={classNameMaker(ST.block_data)}
          heading="Balance"
          text="0 Nis"
          change="-3"
        ></CardData>
      </div>
      <div className={classNameMaker(ST.data_charts)}>
        <DataGridTable
          columns={columns}
          rows={rows}
          heading="Daily Tasks"
          className={classNameMaker(ST.dailyTasks)}
          actions={[{ action: "confirm" }]}
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
