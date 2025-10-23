import { getSessionCustomerAccessToken } from '~/auth';
import { getTopCategories } from '../component-data';
import { TopCategories } from './top-categories';

export async function TopCategoriesExample() {
  /**
   * Perform the data fetch of top categories here in the context where `<TopCategories>` is rendered.
   */

  /**
   * Pass the fetched categories to the `<TopCategories>` component.
   */
  return <>
    <TopCategories />
  </>;
}
