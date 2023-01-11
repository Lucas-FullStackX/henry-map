import { useRouter } from 'next/router';
import CategoryDetail from '../../src/modules/Category/CategoryDetail';

export default function CategoryList() {
  const router = useRouter();
  const id = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id;
  return (
    <>
      <CategoryDetail id={id} />
    </>
  );
}
