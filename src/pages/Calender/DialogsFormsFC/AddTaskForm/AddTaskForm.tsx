import React, { useEffect, useMemo } from "react";
import { UseFormProps, UseFormReturn } from "react-hook-form";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import Form from "../../../../components/ReactHookForm/Components/FormRHF";
import FormProviderRHF from "../../../../components/ReactHookForm/Components/FromProviderRHF";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";
import { defaultValueAddTask, AddTaskFormInterface } from "./AddTaskFormTypes";
import DatePickerRHF from "../../../../components/ReactHookForm/Components/DatePickerRHF";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";

import TimePickerRHF from "../../../../components/ReactHookForm/Components/TimePickerRHF";
import { EventsTypeValues } from "../DialogFormsTypes";
import FooterButtonsDialog from "../FooterButtonsDialog/FooterButtonsDialog";

const { Button } = FormComponetsExportMui;

const { Grid } = UIComponentsExportMui;
function AddTaskForm({
  curDate,

  setNewTask,
  setDialogClose,
}: {
  curDate: Date;
  setDialogClose: React.Dispatch<React.SetStateAction<boolean>>;
  setNewTask: (data: AddTaskFormInterface) => void;
}) {
  return (
    <>
      <FormProviderRHF<AddTaskFormInterface>
        values={{
          defaultValues: { ...defaultValueAddTask, date: curDate },

          mode: "onBlur",
        }}
      >
        {({ handleSubmit, control }: UseFormReturn<AddTaskFormInterface>) => {
          return (
            <Form submitFun={handleSubmit((data) => setNewTask(data))}>
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
                      name="nameTask"
                      label="Name Event"
                      variant="standard"
                    />
                  </Grid>

                  {/* <Grid item md={4}>
                    <InputRHF
                      control={control}
                      name="participants"
                      label="Participants"
                      variant="standard"
                    />
                  </Grid> */}
                </Grid>

                <Grid container item md={12} spacing={3}>
                  <Grid item md={4}>
                    <TimePickerRHF
                      control={control}
                      name="time"
                      timePicker={{
                        label: "Start Event",
                        PopperProps: { placement: "auto" },
                        textFieldProps: { variant: "standard" },
                      }}
                    />
                  </Grid>
                  {/* <Grid item md={4}>
                    <TimePickerRHF
                      control={control}
                      name="timeEnd"
                      timePicker={{
                        label: "End Event",
                        PopperProps: { placement: "auto" },
                        textFieldProps: { variant: "standard" },
                      }}
                    />
                  </Grid> */}
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

export default AddTaskForm;
