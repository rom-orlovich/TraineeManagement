export type ActiveForm = "addEvent" | "addTask";
export type FormDisplay={ [keyof in ActiveForm]: JSX.Element }