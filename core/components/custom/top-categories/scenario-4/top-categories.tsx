import { Card } from '~/vibes/soul/primitives/card';
import { TopCategoriesContainer } from '../top-categories-container';
import { SubcategoryList } from '../subcategory-list';
import { CardSkeleton } from '~/vibes/soul/primitives/card';
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
  categories 
}: {
  categories: Promise<Category[]>;
}) {
  return <>
    <Suspense fallback={<TopCategoriesSkeleton />}>
      <TopCategoriesInner categories={categories} />
    </Suspense>
  </>;
}

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
