import { getSessionCustomerAccessToken } from '~/auth';
import { Card } from '~/vibes/soul/primitives/card';
import { getTopCategories } from '../component-data';
import { TopCategoriesContainer } from '../top-categories-container';
import { SubcategoryList } from '../subcategory-list';
import { CardSkeleton } from '~/vibes/soul/primitives/card';
import { Suspense } from 'react';

export async function TopCategories() {
  /**
   * Move the data fetching into the "inner" component, as the main component will now handle Suspense.
   */
  const customerAccessToken = await getSessionCustomerAccessToken();
  const categories = await getTopCategories(customerAccessToken);

  /**
   * Move the main implementation into the "inner" component.
   * Instead, use `<Suspense>` here to wrap the "inner" component.
   */
  return <>
    <TopCategoriesContainer title="Top Categories">
      {categories.map((category) => (
        <div key={category.entityId}>
          <Card
            title={category.name}
            image={category.image?.url ? {
              src: category.image?.url ?? '',
              alt: category.image?.altText ?? '',
            } : undefined}
            href={category.path}
          />
          {category.children && (
            <SubcategoryList categories={category.children} />
          )}
        </div>
      ))}
    </TopCategoriesContainer>
  </>;
}

/**
 * Create the component `TopCategoriesInner`.
 *  - The component doesn't need to be exported.
 *  - The implementation previously in the main component will be here.
 */

export function TopCategoriesSkeleton() {
  return <>
    <TopCategoriesContainer title="Top Categories">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </TopCategoriesContainer>
  </>;
}
