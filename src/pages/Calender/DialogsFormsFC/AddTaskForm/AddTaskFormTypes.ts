export interface AddTaskFormInterface {
  date: Date;
  id?: string;
  type?: string;
  nameTask: string;
  time: string;
  status: boolean;

  description?: string;
}
export const defaultValueAddTask: AddTaskFormInterface = {
  date: new Date(),
  nameTask: "",
  time: "",
  status: false,
  description: "",
};
