import { Suspense } from 'react';
import { TopCategories, TopCategoriesSkeleton } from './top-categories';

export async function TopCategoriesExample() {
  return <>
    <Suspense fallback={<TopCategoriesSkeleton />}>
      <TopCategories />
    </Suspense>
  </>;
}
