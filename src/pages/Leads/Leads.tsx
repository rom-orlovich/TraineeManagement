import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CardData from "../../components/CardData/CardData";
import ChartPie from "../../components/Charts/ChartPie/ChartPie";
import DataGridTable from "../../components/DataGridTable/DataGridTable";
import { dataPie, LeadsTable } from "../../DummyData/DummyData";
import { propsType } from "../../helpers/GlobalType";

import { classNameMaker } from "../../helpers/helperFunction";
import ST from "./Leads.module.scss";
function Leads({ className }: propsType) {
  return (
    <section className={classNameMaker(ST.leads_layout, className)}>
      <div className={classNameMaker(ST.leads_numbers)}>
        <CardData
          className={classNameMaker(ST.stats_block)}
          heading="Leads Numbers"
          text="5"
          displayIndicator
          displayPrecentage={false}
        ></CardData>
        <CardData
          className={classNameMaker(ST.stats_block)}
          heading="Handle"
          text="3"
          displayIndicator
          displayPrecentage={false}
        ></CardData>
        <CardData
          className={classNameMaker(ST.stats_block)}
          heading="Not Handle"
          text="2"
          displayIndicator
          displayIndicatorPositive={false}
          displayPrecentage={false}
        ></CardData>
      </div>

      <div className={classNameMaker(ST.leads_list)}>
        <DataGridTable
          className={classNameMaker(ST.leads_listCard)}
          columns={LeadsTable.columns}
          rows={LeadsTable.rows}
          actions={[{ action: "confirm" }]}
        ></DataGridTable>
      </div>
    </section>
  );
}
export default Leads;
