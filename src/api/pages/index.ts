import { db } from '@api/db';
import { GetPageRequest, GetPagesRequest, Page } from '@api/pages/types';

export const getPages = ({ filters }: GetPagesRequest) => {
  const keyword = filters?.keyword ?? '';

  console.log({ keyword });

  if (keyword?.length) {
    return db.pages
      .filter(
        (page) =>
          page.name.toLowerCase().includes(keyword) || page.description?.toLowerCase().includes(keyword) || false
      )
      .toArray();
  }

  return db.pages.toArray();
};

export const getPage = async ({ id }: GetPageRequest): Promise<Page | null> => {
  const pages = await db.pages.filter((page) => page.id === id).toArray();
  return pages.length ? pages[0] : null;
};

export const addPage = (page: Page) => {
  return db.pages.add({ ...page, id: undefined });
};

export const updatePage = async (page: Page) => {
  await db.pages.put(page);
  return page;
};
