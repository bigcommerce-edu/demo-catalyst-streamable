import { getSessionCustomerAccessToken } from '~/auth';
import { getTopCategories } from '../component-data';
import { TopCategories } from './top-categories';

export async function TopCategoriesExample() {
  const customerAccessToken = await getSessionCustomerAccessToken();
  const categories = getTopCategories(customerAccessToken);

  return <>
    <TopCategories categories={categories} />
  </>;
}
