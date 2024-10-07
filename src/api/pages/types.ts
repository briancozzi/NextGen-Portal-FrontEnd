export interface Page {
  id?: number;
  name: string;
  description?: string;
  slug: string;
  draft?: string;
  published?: string;
  userId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetPagesFiltersRequest {
  keyword?: string;
}

export interface GetPagesRequest {
  filters: GetPagesFiltersRequest;
}

export interface GetPageRequest {
  id: number;
}

export type GetPagesResponse = Array<Page>;
