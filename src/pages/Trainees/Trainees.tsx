import React from "react";
import { useState } from "react";
import { getDataGridMakeActions as actions } from "../../components/DataGridTable/DataGridActions";
import DataGridTable from "../../components/DataGridTable/DataGridTable";
import { TraineeTable } from "../../DummyData/DummyData";
import { propsType } from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";
import ST from "./Trainees.module.scss";
function Trainees({ className }: propsType) {
  const { columns, rows } = TraineeTable;
  const [newRow, SetNewRow] = useState(rows);
  return (
    <section className={classNameMaker(ST.Trainee_layout, className)}>
      <div className={classNameMaker(ST.Trainee_List)}>
        <DataGridTable
          className={classNameMaker(ST.Trainees_ListCard)}
          columns={[...columns]}
          actions={["delete"]}
          rows={rows}
        ></DataGridTable>
      </div>
      <div className={classNameMaker(ST.Trainees_Statisic)}> </div>
    </section>
  );
}

export default Trainees;
