import React from "react";
import { iconsMui } from "../../../../components/MUI/IconsMui/IconsMuiExports";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
const { Grid } = UIComponentsExportMui;
const { IconButton, DeleteIcon } = iconsMui;
function HeaderCellTitle({
  title,
  removeEvent,
  id,
  type,
}: {
  type: string;
  title: string;
  removeEvent: (id: string) => void;
  id: string;
}) {
  return (
    <>
      <Grid container item justifyContent="space-between" alignItems="center">
        <Grid item>
          <div>
            <b>Type:</b> {type}
          </div>
        </Grid>
        <Grid item marginRight="0.5rem">
          <IconButton
            style={{ padding: "0.1rem" }}
            onClick={() => {
              removeEvent(id);
            }}
          >
            {<DeleteIcon style={{ color: "white", fontSize: "1rem" }} />}
          </IconButton>
        </Grid>
      </Grid>
      <div>
        <b>Title:</b> {title}
      </div>
    </>
  );
}

export default HeaderCellTitle;
