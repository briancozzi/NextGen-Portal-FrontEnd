export interface User {
  id?: number;
  username: string;
  firstName: string;
  lastName: string;
  middleInitial: string;
  suffix: string;
  displayName: string;
  jobTitle: string;
  active: boolean;
  photo?: string;
}

export interface GetUsersFiltersRequest {
  keyword?: string;
}

export interface GetUsersRequest {
  filters: GetUsersFiltersRequest;
}

export interface GetUserRequest {
  id: number;
}

export type GetUsersResponse = Array<User>;
