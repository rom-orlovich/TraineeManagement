import React from "react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import CardData from "../../components/CardData/CardData";
import ChartPie from "../../components/Charts/ChartPie/ChartPie";

import DataGridTable from "../../components/DataGridTable/DataGridTable";
import { dataPie, TraineeTable } from "../../DummyData/DummyData";
import { propsType } from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";
import ST from "./Trainees.module.scss";
function Trainees({ className }: propsType) {
  const { columns, rows } = TraineeTable;

  const location = useLocation();
  console.log(location.pathname.slice(1).split("/"));
  // console.log(Outlet);
  return (
    <section className={classNameMaker(ST.trainee_layout, className)}>
      <div className={classNameMaker(ST.trainees_numbers)}>
        <CardData
          className={classNameMaker(ST.stats_block)}
          heading="Total Trainees"
          text="5"
          displayIndicator
          displayPrecentage={false}
        ></CardData>
        <CardData
          className={classNameMaker(ST.stats_block)}
          heading="Active"
          text="3"
          displayIndicator
          displayPrecentage={false}
        ></CardData>
        <CardData
          className={classNameMaker(ST.stats_block)}
          heading="In Active"
          text="2"
          displayIndicator
          displayPrecentage={false}
        ></CardData>
      </div>

      <div className={classNameMaker(ST.trainee_list)}>
        <DataGridTable
          className={classNameMaker(ST.trainees_listCard)}
          columns={[...columns]}
          actions={[{ action: "delete" }]}
          rows={rows}
        ></DataGridTable>
      </div>
    </section>
  );
}

export default Trainees;
