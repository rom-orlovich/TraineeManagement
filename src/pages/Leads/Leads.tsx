import React, { useEffect } from "react";
import ChartPie from "../../components/Charts/ChartPie/ChartPie";
import DataGridTable from "../../components/DataGridTable/DataGridTable";
import { dataPie, LeadsTable } from "../../DummyData/DummyData";
import { propsType } from "../../helpers/GlobalType";

import { classNameMaker } from "../../helpers/helperFunction";
import ST from "./Leads.module.scss";
function Leads({ className }: propsType) {
  return (
    <section className={classNameMaker(ST.leads_Layout, className)}>
      <div className={classNameMaker(ST.leads_List)}>
        <DataGridTable
          className={classNameMaker(ST.leads_ListCard)}
          columns={LeadsTable.columns}
          rows={LeadsTable.rows}
          actions={[{ action: "confirm" }]}
        ></DataGridTable>
      </div>
      <div className={classNameMaker(ST.leads_Statisic)}>
        <ChartPie
          className={classNameMaker(ST.statsBlock)}
          data={dataPie[3].data}
          options={dataPie[3].options}
          heading={dataPie[3].name}
        ></ChartPie>
        <ChartPie
          className={classNameMaker(ST.statsBlock)}
          data={dataPie[4].data}
          options={dataPie[4].options}
          heading={dataPie[4].name}
        ></ChartPie>
        <ChartPie
          className={classNameMaker(ST.statsBlock)}
          data={dataPie[5].data}
          options={dataPie[5].options}
          heading={dataPie[5].name}
        ></ChartPie>
      </div>
    </section>
  );
}
export default Leads;
