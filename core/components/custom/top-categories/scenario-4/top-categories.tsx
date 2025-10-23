import { Card } from '~/vibes/soul/primitives/card';
import { TopCategoriesContainer } from '../top-categories-container';
import { SubcategoryList } from '../subcategory-list';
import { CardSkeleton } from '~/vibes/soul/primitives/card';
import { Suspense } from 'react';
import { getSessionCustomerAccessToken } from '~/auth';
import { getTopCategories } from '../component-data';

/**
 * Define a clean interface describing the expected category data structure.
 */

/**
 * Instead of handling data fetching within the component, receive a `categories` parameter.
 * This allows the component to be concerned only with the visual presentation, not how data was received.
 *  - `categories` should be of the type `Promise<Category[]>`
 */
export async function TopCategories() {
  /**
   * Pass `categories` straight to the inner component.
   */
  return <>
    <Suspense fallback={<TopCategoriesSkeleton />}>
      <TopCategoriesInner />
    </Suspense>
  </>;
}

/**
 * Add the same signature to the inner component.
 *  - Alias `categories` as `categoriesPromise`
 */
async function TopCategoriesInner() {
  /**
   * Get rid of the direct data fetching.
   *  - Now the `categoriesPromise` parameter can just be awaited.
   */
  const customerAccessToken = await getSessionCustomerAccessToken();
  const categories = await getTopCategories(customerAccessToken);

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

export function TopCategoriesSkeleton() {
  return <>
    <TopCategoriesContainer title="Top Categories">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </TopCategoriesContainer>
  </>;
}
