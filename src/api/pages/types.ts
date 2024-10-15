export interface Page {
  id?: number;
  name: string;
  description?: string;
  slug: string;
  data?: string; // or pageStructureData / designData
  draftContent?: string; // or draftMarkup / editorPreview
  publishedContent?: string;
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
