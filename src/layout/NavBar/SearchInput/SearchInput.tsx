import React from "react";
import AutocompleteMui from "../../../components/MUI/FormCompnents/AutocompleteMui/AutocompleteMui";
import { classNameMaker } from "../../../helpers/helperFunction";
import ST from "./SearchInput.module.scss";
function SearchInput() {
  return (
    <AutocompleteMui
      className={classNameMaker(ST)}
      style={{ width: "10rem" }}
      freeSolo
      textFieldProps={{
        name: "SearchInput",
        label: "Search",
      }}
      options={[]}
    />
  );
}

export default SearchInput;
