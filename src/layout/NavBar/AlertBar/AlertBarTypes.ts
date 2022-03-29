export interface AlertInterface {
  id: string;
  date: Date;
  time: Date;
  name: string;
  description: string;
}

export type AlertsListType = AlertInterface[];
