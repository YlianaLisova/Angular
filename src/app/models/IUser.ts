import {ICompany} from "./ICompany";

export interface IUser{
  id: number;
  name: string;
  username: string;
  company: ICompany;
}
