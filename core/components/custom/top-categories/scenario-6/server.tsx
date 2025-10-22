import { getSessionCustomerAccessToken } from '~/auth';
import { getTopCategories } from '../component-data';
import { TopCategories } from './top-categories';
import { Streamable } from '@/vibes/soul/lib/streamable';

export async function TopCategoriesExample() {
  const streamableCategories = Streamable.from(async () => {
    const customerAccessToken = await getSessionCustomerAccessToken();
    return await getTopCategories(customerAccessToken);
  });

  return <>
    <TopCategories categories={streamableCategories} />
  </>;
}
