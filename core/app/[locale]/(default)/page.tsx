import { locales } from '~/i18n/locales';
import { Page as MakeswiftPage } from '~/lib/makeswift';
// import { TopCategoriesExample } from '~/components/custom/top-categories/scenario-1/server';
// import { TopCategoriesExample } from '~/components/custom/top-categories/scenario-2/server';
import { TopCategoriesExample } from '~/components/custom/top-categories/scenario-3/server';
// import { TopCategoriesExample } from '~/components/custom/top-categories/scenario-4/server';
// import { TopCategoriesExample } from '~/components/custom/top-categories/scenario-5/server';
// import { TopCategoriesExample } from '~/components/custom/top-categories/scenario-6/server';

interface Params {
  locale: string;
}

export function generateStaticParams(): Params[] {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<Params>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  return <>
    <TopCategoriesExample />
    <MakeswiftPage locale={locale} path="/" />
  </>;
}
