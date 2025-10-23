import { Suspense } from 'react';
import { TopCategories, TopCategoriesSkeleton } from './top-categories';

export async function TopCategoriesExample() {
  /**
   * Get rid of the `<Suspense>` implementation, since the component now handles it internally.
   */
  return <>
    <Suspense fallback={<TopCategoriesSkeleton />}>
      <TopCategories />
    </Suspense>
  </>;
}
