import { Card } from '~/vibes/soul/primitives/card';
import { TopCategoriesContainer } from '../top-categories-container';
import { SubcategoryList } from '../subcategory-list';
import { CardSkeleton } from '~/vibes/soul/primitives/card';
import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { Suspense } from 'react';

interface Category {
  entityId: number;
  name: string;
  path: string;
  image: {
    url: string;
    altText: string;
  } | null;
  children?: Category[];
}

export async function TopCategories({
  /**
   * Alias `categories` as `streamableCategories`, since `categories` will be used in the callback.
   */ 
  categories,
}: {
  /**
   * Make use of the type `Stremable` instead of explicitly expecting a promise.
   * A `Streamable` is a value that can be either a value or a promise.
   */
  categories: Promise<Category[]>;
}) {
  /**
   * Use `<Stream>` as an abstraction layer to handle Suspense.
   *  - Eliminates the need for a separate component to receive the promise
   *  - Accommodates both synchronous and asynchronous data sources
   *  - Accommodates resolving a promise in a server-side or client-side context
   */
  return <>
    <Suspense fallback={<TopCategoriesSkeleton />}>
      <TopCategoriesInner categories={categories} />
    </Suspense>
  </>;
}

/**
 * `TopCategoriesInner` is no longer needed in order to use Suspense. 
 * Move the main implementation back to the main component.
 */
async function TopCategoriesInner({ 
  categories: categoriesPromise 
}: {
  categories: Promise<Category[]>;
}) {
  const categories = await categoriesPromise;

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
