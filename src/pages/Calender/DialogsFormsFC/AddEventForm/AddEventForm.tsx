import React, { useEffect, useMemo } from "react";
import { UseFormProps, UseFormReturn } from "react-hook-form";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import Form from "../../../../components/ReactHookForm/Components/FormRHF";
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
import { EventsTypeValues } from "../DialogFormsTypes";

const { Button } = FormComponetsExportMui;

const { Grid } = UIComponentsExportMui;
function AddEventForm({
  curDate,

  setEvent,
  setDialogClose,
}: {
  curDate: Date;
  setDialogClose: React.Dispatch<React.SetStateAction<boolean>>;
  setEvent: (data: AddEventFormInterface) => void;
}) {
  return (
    <>
      <FormProviderRHF<AddEventFormInterface>
        values={{
          defaultValues: { ...defaultValueAddEvent, date: curDate },

          mode: "onBlur",
        }}
      >
        {({ handleSubmit, control }: UseFormReturn<AddEventFormInterface>) => {
          return (
            <Form
              submitFun={handleSubmit((data) => {
                setEvent(data);
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
                        textFieldProps: { variant: "standard" },
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
                        textFieldProps: { variant: "standard" },
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
            </Form>
          );
        }}
      </FormProviderRHF>
    </>
  );
}

export default AddEventForm;
