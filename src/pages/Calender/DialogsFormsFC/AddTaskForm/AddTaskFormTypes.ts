export interface AddTaskFormInterface {
  date: Date;
  id?: string;
  type?: string;
  nameTask: string;
  time: Date;
  status: boolean;
  description?: string;
}
export const defaultValueAddTask: AddTaskFormInterface = {
  date: new Date(),
  nameTask: "",
  time: new Date(),
  status: false,
  description: "",
};
