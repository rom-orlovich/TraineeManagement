import React, { useState } from "react";

import Card from "../../components/UI/Card/Card";

import { classNameMaker } from "../../helpers/helperFunction";
import { propsType } from "../../Types/GlobalType";

import CardData from "../../components/CardData/CardData";
import TodayTasks from "./DailyTasks/DailyTasks";

import { OverviewLineChart } from "../../DummyData/DummyData";

import ST from "./Overview.module.scss";
import OverviewLineBar from "./OverviewLineBar/OverviewLineBar";
function Overview({ className }: propsType) {
  return (
    <section className={classNameMaker(ST.overview_Layout)}>
      <div className={classNameMaker(ST.card_blocks)}>
        <CardData heading="Todal Trainees" text="1" change="3"></CardData>

        <CardData heading="Today leads" text="0" change="0"></CardData>
        <CardData heading="Balance" text="0 Nis" change="-3"></CardData>
      </div>
      <div className={classNameMaker(ST.data_charts)}>
        <TodayTasks className={classNameMaker(ST.dailyTasks)} />

        <OverviewLineBar
          data={OverviewLineChart[0].data}
          options={OverviewLineChart[0].options}
          className={classNameMaker(ST.charts_display)}
        ></OverviewLineBar>
      </div>
    </section>
  );
}

export default Overview;
