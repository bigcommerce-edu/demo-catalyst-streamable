import { getSessionCustomerAccessToken } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
import { cache } from 'react';

export const getTopCategories = cache(
  async (customerAccessToken?: string) => {
    return [];
  }
);
