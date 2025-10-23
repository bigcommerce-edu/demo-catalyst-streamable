import { getSessionCustomerAccessToken } from '~/auth';
import { Card } from '~/vibes/soul/primitives/card';
import { getTopCategories } from '../component-data';
import { TopCategoriesContainer } from '../top-categories-container';
import { SubcategoryList } from '../subcategory-list';

export async function TopCategories() {
  /**
   * Fetch top-level categories here.
   *  - Get the customer access token from the current session.
   *  - Pass the customer access token to `getTopCategories` and await the result.
   */

  /**
   * Implement a simple component to render each top-level category and the subcategories of each.
   * The other custom components mentioned just help us separate out the HTML/Tailwind code from
   * the concepts we're concerned with.
   *  - Use `<TopCategoriesContainer>` with a `title` prop to wrap the content.
   *  - Loop through the categories and render each one with:
   *    - A `<Card>` component to display the category name and image.
   *    - A `<SubcategoryList>` component if the category has children.
   */
  return <>
    
  </>;
}