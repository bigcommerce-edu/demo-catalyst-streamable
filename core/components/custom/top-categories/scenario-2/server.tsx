import { Suspense } from 'react';
import { TopCategories, TopCategoriesSkeleton } from './top-categories';

export async function TopCategoriesExample() {
  /**
   * Wrap this rendering of `<TopCategories>` with `<Suspense>` to prevent page loading
   * being blocked by the data fetch.
   *  - Use `<TopCategoriesSkeleton>` as the fallback.
   */
  return <>
    <TopCategories />
  </>;
}
