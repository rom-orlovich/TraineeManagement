import React, { useEffect, useMemo, useState } from "react";
import { UseFormProps, UseFormReturn } from "react-hook-form";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import FormRHF from "../../../../components/ReactHookForm/Components/FormRHF";
import FormProviderRHF from "../../../../components/ReactHookForm/Components/FromProviderRHF";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";
import {
  defaultValueAddEvent,
  AddEventFormInterface,
} from "./AddEventFormTypes";
import DatePickerRHF from "../../../../components/ReactHookForm/Components/DatePickerRHF";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";

import TimePickerRHF from "../../../../components/ReactHookForm/Components/TimePickerRHF";
import FooterButtonsDialog from "../FooterButtonsDialog/FooterButtonsDialog";
import { useFollowState } from "../../../../helpers/HelperHooks";
// interface eventProps {
//   date: Date;
//   title: string;
//   id: string;
//   type: string;
//   start: Date | null;
//   end: Date | null;
//   participants: string;
//   description: string;
// }

const { Grid } = UIComponentsExportMui;
function AddEventForm({
  curDate,
  setEvent,
  setDialogClose,
  existEvent,
}: {
  curDate: Date;
  setDialogClose: React.Dispatch<React.SetStateAction<boolean>>;
  setEvent: (data: AddEventFormInterface) => void;
  existEvent?: AddEventFormInterface;
}) {
  const [defaultValue, setDefaultValue] = useState({
    ...defaultValueAddEvent,
    date: curDate,
    ...existEvent,
  });

  return (
    <>
      <FormProviderRHF<AddEventFormInterface>
        values={{
          defaultValues: defaultValue,

          mode: "onBlur",
        }}
      >
        {({ handleSubmit, control }: UseFormReturn<AddEventFormInterface>) => {
          return (
            <FormRHF
              submitFun={handleSubmit((data) => {
                setEvent({
                  ...data,
                  type: "event",
                  id: existEvent ? existEvent.id : undefined,
                });
                setDialogClose(false);
              })}
            >
              <Grid container rowSpacing={2}>
                <Grid container item md={12} spacing={3}>
                  <Grid item md={4}>
                    <DatePickerRHF
                      control={control}
                      name="date"
                      datePicker={{
                        label: "Date",
                        PopperProps: { placement: "auto" },

                        textFieldProps: {
                          variant: "standard",
                          value: curDate,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <InputRHF
                      control={control}
                      name="nameEvent"
                      label="Name Event"
                      variant="standard"
                    />
                  </Grid>

                  <Grid item md={4}>
                    <InputRHF
                      control={control}
                      name="participants"
                      label="Participants"
                      variant="standard"
                    />
                  </Grid>
                </Grid>

                <Grid container item md={12} spacing={3}>
                  <Grid item md={4}>
                    <TimePickerRHF
                      control={control}
                      name="timeStart"
                      timePicker={{
                        label: "Start Event",
                        PopperProps: { placement: "auto" },
                        textFieldProps: {
                          variant: "standard",
                          type: "datetime-local",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TimePickerRHF
                      control={control}
                      name="timeEnd"
                      timePicker={{
                        label: "End Event",
                        PopperProps: { placement: "auto" },
                        textFieldProps: {
                          variant: "standard",
                          type: "datetime-local",
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container item md={12} spacing={3}>
                  <Grid item md={12}>
                    <InputRHF
                      control={control}
                      name="description"
                      label="Description"
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <FooterButtonsDialog setDialogClose={setDialogClose} />
              </Grid>
            </FormRHF>
          );
        }}
      </FormProviderRHF>
    </>
  );
}

export default AddEventForm;
