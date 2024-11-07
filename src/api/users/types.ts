export const DEPARTMENT_TYPES = ['Department 1', 'Department 2', 'Department 3'] as const;
export const JOB_TITLE_TYPES = [
  'Practice Group Director',
  'Paralegal',
  'Member',
  'Junior Associate',
  'Associate',
  'Senior Associate',
  'Senior Partner',
  'Junior Partner',
] as const;
export const SUFFIX_TYPES = ['Ph.D', 'M.D.', 'Esq.', 'CPA'] as const;
export const OFFICE_TYPES = ['Office 1', 'Office 2', 'Office 3'] as const;
export const DASHBOARD_TYPES = ['Dashboard 1', 'Dashboard 2', 'Dashboard 3'] as const;

export type Department = (typeof DEPARTMENT_TYPES)[number];
export type JobTitle = (typeof JOB_TITLE_TYPES)[number];
export type Suffix = (typeof SUFFIX_TYPES)[number];
export type Office = (typeof OFFICE_TYPES)[number];
export type Dashboard = (typeof DASHBOARD_TYPES)[number];

export interface User {
  id?: number;
  username: string;
  firstName: string;
  lastName: string;
  middleInitial: string;
  suffix: Suffix;
  displayName: string;
  jobTitle: JobTitle;
  startDate: string;
  department: Department;
  timekeeperNumber: string;
  phoneNumber: string;
  internalExtn: string;
  mobilePhone: string;
  assistantName: string;
  office: Office;
  officeRoomNumber: number;
  emailAddress: string;
  defaultDashboard: Dashboard;
  active?: boolean;
  photo?: string;
}

export interface GetUsersFiltersRequest {
  keyword?: string;
}

export interface PaginationRequest {
  page: number;
  perPage: number;
}

export interface GetUserRequest {
  id: number;
}

export type GetUsersResponse = Array<User>;

export interface PaginationParams {
  page: number;
  perPage: number;
}

export interface SortParams {
  key: string;
  direction: 'asc' | 'desc';
}

export interface FilterParams {
  keyword?: string;
  title?: string;
  office?: string;
  department?: string;
  license?: string;
  language?: string;
  education?: string;
}

export interface GetUsersRequest {
  filters?: FilterParams;
  pagination?: PaginationParams;
  sort?: SortParams;
}

export interface PaginationMetadata {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  metadata: PaginationMetadata;
}
