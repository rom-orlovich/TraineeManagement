import React from "react";
import { useState } from "react";
import CardData from "../../components/CardData/CardData";
import ChartPie from "../../components/Charts/ChartPie/ChartPie";

import DataGridTable from "../../components/DataGridTable/DataGridTable";
import { dataPie, TraineeTable } from "../../DummyData/DummyData";
import { propsType } from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";
import ST from "./Trainees.module.scss";
function Trainees({ className }: propsType) {
  const { columns, rows } = TraineeTable;

  return (
    <section className={classNameMaker(ST.Trainee_layout, className)}>
      <div className={classNameMaker(ST.Trainee_List)}>
        <DataGridTable
          className={classNameMaker(ST.Trainees_ListCard)}
          columns={[...columns]}
          actions={[{ action: "delete" }]}
          rows={rows}
        ></DataGridTable>
      </div>
      <div className={classNameMaker(ST.Trainees_Statisic)}>
        <ChartPie
          className={classNameMaker(ST.statsBlock)}
          data={dataPie[0].data}
          options={dataPie[0].options}
          heading="Ages"
        ></ChartPie>
        <ChartPie
          className={classNameMaker(ST.statsBlock)}
          data={dataPie[1].data}
          options={dataPie[1].options}
          heading="Areas"
        ></ChartPie>
        <ChartPie
          className={classNameMaker(ST.statsBlock)}
          data={dataPie[2].data}
          options={dataPie[2].options}
          heading="Sources"
        ></ChartPie>
      </div>
    </section>
  );
}

export default Trainees;
