export interface AddEventFormInterface {
  date: Date;
  id?: string;
  type?: string;
  nameEvent: string;
  timeStart: string;
  timeEnd: string;
  participants?: string;
  description?: string;
}
export const defaultValueAddEvent: AddEventFormInterface = {
  date: new Date(),
  nameEvent: "",
  timeStart: "",
  timeEnd: "",
  participants: "",
  description: "",
};
