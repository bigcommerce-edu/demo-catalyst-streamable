interface Category {
  entityId: number;
  name: string;
  path: string;
}

interface SubcategoryListProps {
  categories: Category[];
}

export async function SubcategoryList({ categories }: SubcategoryListProps) {
  return <>
    <ul className="flex gap-4">
      {categories.map((subCategory) => (
        <li key={subCategory.entityId}>
          <a href={subCategory.path}>{subCategory.name}</a>
        </li>
      ))}
    </ul>
  </>;
}
