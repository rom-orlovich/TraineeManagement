import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trainee } from "../../DummyData/DummyDataType";
import { FormValuesAddTraineeInterface } from "../../pages/AddFormPages/AddTraineePage/FormValuesAddTrainee";
interface addTraineeState {
  traineeArr: Trainee[];
}

const initialState: addTraineeState = {
  traineeArr: [],
};
const addTraineeSlice = createSlice({
  name: "traineeManagement",
  initialState: initialState,
  reducers: {
    addTrainee(state, action: PayloadAction<FormValuesAddTraineeInterface>) {
      // console.log(action.payload);
      const {
        firstName,
        lastName,
        gender,
        phoneNumber,
        email,
        startingDate,
        endingDate,
      } = action.payload;
      const trainee = {
        id: state.traineeArr.length + 1,
        name: firstName + " " + lastName,
        gender: gender as "Male" | "Female" | "Other",
        tel: phoneNumber,
        email,
        status: startingDate < endingDate,
      };
      state.traineeArr.push(trainee);
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     (action: AnyAction) => {
  //       return action.type.endsWith("traineeManagement/addTrainee");
  //     },
  //     (action) => {}
  //   );
  // },
});
export const { addTrainee } = addTraineeSlice.actions;
export default addTraineeSlice.reducer;
