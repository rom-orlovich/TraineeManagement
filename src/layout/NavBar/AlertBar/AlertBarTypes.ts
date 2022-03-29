export interface AlertInterface {
  id: string;
  date: Date;
  time: Date;
  name: string;
  description: string;
  active?: boolean;
}

export type AlertsListType = AlertInterface[];
