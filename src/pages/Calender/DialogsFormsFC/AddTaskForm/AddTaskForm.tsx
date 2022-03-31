import React, { useEffect, useMemo, useState } from "react";
import { UseFormProps, UseFormReturn } from "react-hook-form";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import FormRHF from "../../../../components/ReactHookForm/Components/FormRHF";
import FormProviderRHF from "../../../../components/ReactHookForm/Components/FromProviderRHF";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";
import { defaultValueAddTask, AddTaskFormInterface } from "./AddTaskFormTypes";
import DatePickerRHF from "../../../../components/ReactHookForm/Components/DatePickerRHF";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";

import TimePickerRHF from "../../../../components/ReactHookForm/Components/TimePickerRHF";
import FooterButtonsDialog from "../FooterButtonsDialog/FooterButtonsDialog";
import CheckBoxRHF from "../../../../components/ReactHookForm/Components/CheckBoxRHF";

const { Grid } = UIComponentsExportMui;
function AddTaskForm({
  curDate,
  existTask,
  setNewTask,
  setDialogClose,
}: {
  curDate: Date;
  setDialogClose: React.Dispatch<React.SetStateAction<boolean>>;
  setNewTask: (data: AddTaskFormInterface) => void;
  existTask?: AddTaskFormInterface;
}) {
  const [check, setCheck] = useState(
    existTask?.status ? existTask?.status : defaultValueAddTask.status
  );
  return (
    <>
      <FormProviderRHF<AddTaskFormInterface>
        values={{
          defaultValues: {
            ...defaultValueAddTask,
            date: curDate,
            ...existTask,
            // status: check,
          },

          mode: "onBlur",
        }}
      >
        {({
          handleSubmit,
          control,
          setValue,
        }: UseFormReturn<AddTaskFormInterface>) => {
          return (
            <FormRHF
              submitFun={handleSubmit((data) => {
                setNewTask({ ...data, type: "task", status: check });
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
                  checkboxMuiProps={{
                    checkboxProps: {
                      checked: check,

                      onChange: (e) => {
                        setValue("status", e.target.checked);
                        setCheck(e.target.checked);
                      },
                    },
                  }}
                ></CheckBoxRHF>
                <FooterButtonsDialog setDialogClose={setDialogClose} />
              </Grid>
            </FormRHF>
          );
        }}
      </FormProviderRHF>
    </>
  );
}

export default AddTaskForm;
