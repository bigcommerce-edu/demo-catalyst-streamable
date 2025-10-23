import { getSessionCustomerAccessToken } from '~/auth';
import { getTopCategories } from '../component-data';
import { TopCategories } from './top-categories';
import { Streamable } from '@/vibes/soul/lib/streamable';

export async function TopCategoriesExample() {
  /**
   * Make use of Streamable.from to get a "lazy" promise that isn't executed until it's used.
   *  - Store the streamable result in `streamableCategories`.
   */
  const customerAccessToken = await getSessionCustomerAccessToken();
  const categories = getTopCategories(customerAccessToken);

  /**
   * Pass `streamableCategories` to the `TopCategories` component.
   */
  return <>
    <TopCategories categories={categories} />
  </>;
}
