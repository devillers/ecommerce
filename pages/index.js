import Layout from '../components/Layout';
//import ProductItem from '../components/ProductItem';
//import data from '../utils/data';
//import { useRouter } from 'next/router';

export default function Home() {
  //const router = useRouter();
  //const showHeader = router.pathname === '/login' ? false : true;
  //return <>{showHeader && <Layout />}</>;
  return (
    <Layout title="Accueil">
      {/* <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div> */}
    </Layout>
  );
}
