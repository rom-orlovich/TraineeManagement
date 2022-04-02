import { useState } from "react";

import DataGridTable from "../../components/DataGridTable/DataGridTable";
import { dataProvider, optionSelect } from "../../DummyData/DummyData";
import { ActivitiesDataValueType, propsType } from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";

import ST from "./Activities.module.scss";

import SelectInput from "../../components/Form/SelectInput/SelectInput";
import { useGetManageSelectInputState } from "../../helpers/HelperHooks";

function Activities({ className }: propsType) {
  const { selectState, SelectInputEL } = useGetManageSelectInputState(
    optionSelect[3]
  );
  // const [selectState, setSelectState] = useState<"incomes" | "expenses">(
  //   "incomes"
  // );
  const dataFit = dataProvider.activities;

  // const { rows, columns } =
  //   selectState === "incomes"
  //     ? dataFit.table[0]
  //     : selectState === "expenses"
  //     ? dataFit.table[1]
  //     : { rows: [], columns: [] };
  const dataResSelect = {
    incomes: dataFit.table[0],
    expenses: dataFit.table[1],
  };
  const { rows, columns } =
    dataResSelect[selectState as ActivitiesDataValueType];

  return (
    <section className={classNameMaker(ST.activities_layout, className)}>
      <div className={classNameMaker(ST.upper_section)}>
        <div className={classNameMaker(ST.select_input)}>
          {/* <SelectInput
            data={optionSelect[3]}
            SetValueOnChange={setSelectState}
          ></SelectInput> */}
          <SelectInputEL />
        </div>

        <DataGridTable
          className={classNameMaker(ST.table)}
          columns={columns}
          rows={rows}
          toolBar
        ></DataGridTable>
      </div>
    </section>
  );
}

export default Activities;
