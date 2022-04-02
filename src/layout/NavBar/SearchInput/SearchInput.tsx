import React from "react";
import AutocompleteMui from "../../../components/MUI/FormCompnents/AutocompleteMui/AutocompleteMui";

function SearchInput() {
  return (
    <AutocompleteMui
      style={{ width: "14rem", height: "1rem" }}
      freeSolo
      textFieldProps={{ name: "SearchInput", label: "Search" }}
      options={[]}
    />
  );
}

export default SearchInput;
