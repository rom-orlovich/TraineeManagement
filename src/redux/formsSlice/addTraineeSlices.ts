import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormValuesAddTraineeInterface } from "../../pages/AddFormPages/AddTraineePage/FormValuesAddTrainee";
interface addTraineeState {
  traineeArr: FormValuesAddTraineeInterface[];
}

const initialState: addTraineeState = {
  traineeArr: [],
};
const addTraineeSlice = createSlice({
  name: "addTrainee",
  initialState: initialState,
  reducers: {
    addTrainee(state, action: PayloadAction<FormValuesAddTraineeInterface>) {
      console.log(action.payload);
      state.traineeArr.push(action.payload);
    },
  },
});
export const { addTrainee } = addTraineeSlice.actions;
export default addTraineeSlice.reducer;
