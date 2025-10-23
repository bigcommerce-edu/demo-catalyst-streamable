export async function TopCategoriesContainer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return <>
    <section className="@container">
      <div className="group/top-categories mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
        <h1 className="text-2xl font-bold mb-10">{title}</h1>
        <div className="w-full @container">
          <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-6 @sm:grid-cols-2 @2xl:grid-cols-3 @2xl:gap-x-5 @2xl:gap-y-8 @5xl:grid-cols-4 @7xl:grid-cols-5">
            {children}
          </div>
        </div>
      </div>
    </section>
  </>;
}