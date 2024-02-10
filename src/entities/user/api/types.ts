import { IUser } from "../model/types";

export interface IFetchAllUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
}

export interface IUserResponse {
  data: IUser;
}
