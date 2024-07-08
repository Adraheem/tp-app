export interface IValue {
  label: string;
  value: string;
  amount: number;
  selected: boolean;
}

export type RequestStatus = "APPROVED" | "PENDING" | "EXECUTED";

export interface IRequest {
  name: string;
  email: string;
  email1: string;
  requestStatus: RequestStatus;
  values: IValue[];
}

export interface ISelectValue {
  value: any;
  label: string | React.ReactNode | Date;
}
