import { AutocompleteRenderOptionState } from "@mui/material";
import { iconsMui } from "../../../../../components/MUI/IconsMui/IconsMuiExports";
import { UIComponentsExportMui } from "../../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";

import { ReactDispatch } from "../../../../../helpers/GlobalType";
import { filterById } from "../../../../../helpers/helperFunction";
import { OptionInterface, OptionTypeData } from "./FormsOATypes";
const { Grid } = UIComponentsExportMui;
const { IconButton, RemoveCircleOutlineIcon } = iconsMui;

export const renderOption =
  <T extends OptionInterface>(
    setOptionValue: ReactDispatch<OptionTypeData<T>>
  ) =>
  (
    { ...props }: React.HTMLAttributes<HTMLLIElement>,
    { nameOption, id }: T,
    state: AutocompleteRenderOptionState
  ) => {
    return (
      <li {...props} key={id}>
        <Grid item container justifyContent="space-around">
          <Grid item md={10}>
            {nameOption}
          </Grid>
          <Grid item md={2}>
            <IconButton
              onClick={() => {
                setOptionValue((pre) => [...filterById(id, pre)]);
              }}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      </li>
    );
  };

export const getOptionLabel = <T extends OptionInterface>(o: T) => {
  return typeof o === "object" ? o.nameOption : o;
};

export function getOptionDisable<T extends OptionInterface>(o: T) {
  return o.id !== "";
}

export const isOptionEqualToValue = <T extends OptionInterface>(
  option: T,
  value: T
) => {
  return option.id === value.id;
};
