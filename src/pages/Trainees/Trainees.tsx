import { GridRowsProp } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";
import CardData from "../../components/CardData/CardData";
import ChartPie from "../../components/Charts/ChartPie/ChartPie";

import DataGridTable from "../../components/DataGridTable/DataGridTable";
import { TraineeTable } from "../../DummyData/TablesData";

import { propsType } from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";
import { RootState } from "../../redux/store";
import ST from "./Trainees.module.scss";
function Trainees({ className }: propsType) {
  const {
    columns,
    // rows
  } = TraineeTable;
  const rows = useSelector<RootState>((state) => state.traineeArr);
  const location = useLocation();

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
          displayIndicatorPositive={false}
          displayPrecentage={false}
        ></CardData>
      </div>

      <div className={classNameMaker(ST.trainee_list)}>
        <DataGridTable
          className={classNameMaker(ST.trainees_listCard)}
          columns={[...columns]}
          actions={[{ action: "delete" }]}
          rows={rows as GridRowsProp}
          toolBar
        ></DataGridTable>
      </div>
    </section>
  );
}

export default Trainees;
