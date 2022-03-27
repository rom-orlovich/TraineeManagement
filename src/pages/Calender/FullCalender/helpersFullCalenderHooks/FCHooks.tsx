import { DateClickArg } from "@fullcalendar/interaction";
import { DayCellContentArg, EventContentArg } from "@fullcalendar/react";
import { useCallback } from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { iconsMui } from "../../../../components/MUI/IconsMui/IconsMuiExports";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import { ReactDispatch } from "../../../../helpers/GlobalType";
import { AddEventFormInterface } from "../../DialogsFormsFC/AddEventForm/AddEventFormTypes";

const { Button } = FormComponetsExportMui;
const { Grid } = UIComponentsExportMui;
const { IconButton, DeleteIcon } = iconsMui;
export const useInjectCellContent = (setState: ReactDispatch<boolean>) => {
  return (args: DayCellContentArg) => (
    <div>
      <Button
        variant="contained"
        size="small"
        style={{
          minWidth: "20px",
          padding: "0.2rem 0.3rem",
          fontSize: "0.65rem",
        }}
        onClick={() => {
          setState(true);
        }}
      >
        {args.dayNumberText}
      </Button>
    </div>
  );
};

export const useDateCellClick = (
  setOpenDialog: ReactDispatch<boolean>,
  setInfo: (info: DateClickArg) => void
) => {
  return useCallback((info: DateClickArg) => {
    setInfo(info);
    setOpenDialog(true);
  }, []);
};

export const useRenderEventContent = (
  eventManual: AddEventFormInterface[],
  removeEvent: (id: string) => void
) => {
  return (eventContent: EventContentArg) => {
    const manual = eventManual.find(
      (el) => el.id === eventContent.event._def.publicId
    );

    const idToRemove = manual?.id ? manual?.id : "";

    //text time
    const timeStartText = eventContent.event.start
      ?.toLocaleTimeString()
      .slice(0, -3);
    const timeEndText = eventContent.event.end
      ?.toLocaleTimeString()
      .slice(0, -3);
    return (
      <div>
        {/* <div>
          Time: {timeStartText}-{timeEndText}
        </div> */}
        <Grid container item justifyContent="space-between" alignItems="center">
          <Grid item>
            <b>Time: </b>
            {timeStartText}-{timeEndText}
          </Grid>
          <Grid item marginRight="0.5rem">
            <IconButton
              style={{ padding: "0" }}
              onClick={() => {
                removeEvent(idToRemove);
              }}
            >
              {<DeleteIcon style={{ color: "grey", fontSize: "1rem" }} />}
            </IconButton>
          </Grid>
        </Grid>
        <div>Title: {eventContent.event.title}</div>
        <div>
          Participent: {manual?.participants ? manual?.participants : 0}
        </div>
        {manual?.description && <div>Description: {manual.description}</div>}
      </div>
    );
  };
};
