import React from "react";
import AutocompleteMui from "../../../components/MUI/FormCompnents/AutocompleteMui/AutocompleteMui";
import InputAdormentMui from "../../../components/MUI/FormCompnents/InputAdormentMui/InputAdormentMui";
import { iconsMui } from "../../../components/MUI/IconsMui/IconsMuiExports";
import { classNameMaker } from "../../../helpers/helperFunction";
import ST from "./SearchInput.module.scss";
const { IconButton, SearchIcon } = iconsMui;

function SearchInput() {
  return (
    <div className={classNameMaker(ST.searchInput)}>
      <AutocompleteMui
        className={classNameMaker(ST)}
        forcePopupIcon
        style={{ width: "10rem" }}
        freeSolo
        getOptionLabel={(value) => {
          return value;
        }}
        options={["user1", "user2", "user3"]}
        textFieldProps={{
          name: "SearchInput",
          label: "Search",

          InputProps: {
            endAdornment: (
              <IconButton
                style={{
                  padding: "0px 0px 0px 0px ",

                  height: "100%",
                  paddingBlock: "0px",
                }}
              >
                <SearchIcon />
              </IconButton>
            ),

            // endAdornment: (
            //   <InputAdormentMui position="end">
            //     <SearchIcon />
            //   </InputAdormentMui>
            // ),
          },
        }}
      />

      {/* <SearchIcon className={classNameMaker(ST.searchInput_icon)} /> */}
    </div>
  );
}

export default SearchInput;
