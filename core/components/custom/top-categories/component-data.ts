import { getSessionCustomerAccessToken } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
import { cache } from 'react';

const CategoryTreeFragment = graphql(`
  fragment CategoryTreeFragment on CategoryTreeItem {
    entityId
    name
    path
    description
    productCount
    image {
      url: urlTemplate(lossy: true)
      altText
    }
  }
`);

const GetTopCategoriesQuery = graphql(`
  query GetTopCategoriesQuery {
    site {
      categoryTree {
        ... CategoryTreeFragment
        children {
          ... CategoryTreeFragment
        }
      }
    }
  }
`, [ CategoryTreeFragment ]);

export const getTopCategories = cache(
  async (customerAccessToken?: string) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    
    const categoriesResult = await client.fetch({
      document: GetTopCategoriesQuery,
      customerAccessToken,
      fetchOptions: customerAccessToken ? { cache: 'no-store' } : { next: { revalidate } },
    });

    const categories = categoriesResult.data.site.categoryTree;

    return categories;
  }
);
