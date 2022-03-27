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
import FooterButtonsDialog from "../FooterButtonsDialog/FooterButtonsDialog";
import CheckBoxRHF from "../../../../components/ReactHookForm/Components/CheckBoxRHF";
interface taskProps {
  date: Date;
  type: string;
  title: string;
  id: string;

  time: Date | null;
  status: boolean;
  description: string;
}
const { Button } = FormComponetsExportMui;

const { Grid } = UIComponentsExportMui;
function AddTaskForm({
  curDate,
  exsitTask,
  setNewTask,
  setDialogClose,
}: {
  curDate: Date;
  setDialogClose: React.Dispatch<React.SetStateAction<boolean>>;
  setNewTask: (data: AddTaskFormInterface) => void;
  exsitTask?: taskProps;
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
            <Form
              submitFun={handleSubmit((data) => {
                setNewTask({ ...data, type: "task" });
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
                      name="nameTask"
                      label="Name Task"
                      variant="standard"
                    />
                  </Grid>

                  <Grid item md={4}>
                    <TimePickerRHF
                      control={control}
                      name="time"
                      timePicker={{
                        label: "Time",
                        PopperProps: { placement: "auto" },
                        textFieldProps: {
                          variant: "standard",
                          // error: false,
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

                <CheckBoxRHF
                  control={control}
                  name="status"
                  label="Done?"
                ></CheckBoxRHF>
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
