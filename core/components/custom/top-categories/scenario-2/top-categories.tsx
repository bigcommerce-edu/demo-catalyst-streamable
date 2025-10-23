import { getSessionCustomerAccessToken } from '~/auth';
import { Card } from '~/vibes/soul/primitives/card';
import { getTopCategories } from '../component-data';
import { TopCategoriesContainer } from '../top-categories-container';
import { SubcategoryList } from '../subcategory-list';
import { CardSkeleton } from '~/vibes/soul/primitives/card';

export async function TopCategories() {
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

/**
 * Create the component `TopCategoriesSkeleton`.
 *  - Export the component so it can be used as the fallback for `<Suspense>`.
 *  - Use the same `<TopCategoriesContainer>` structure as the main component.
 *  - Make use of the built-in `<CardSkeleton>` component.
 */
