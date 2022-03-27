export interface AddEventFormInterface {
  date: Date;
  id?: string;
  type?: string;
  nameEvent: string;
  timeStart: Date;
  timeEnd: Date;
  participants?: string;
  description?: string;
}
export const defaultValueAddEvent: AddEventFormInterface = {
  date: new Date(),
  nameEvent: "",
  timeStart: new Date(),
  timeEnd: new Date(),
  participants: "",
  description: "",
};
