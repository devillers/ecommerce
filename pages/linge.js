import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout title="location linge">
      <div className="rounded-md shadow-md text-xs text-slate-900 font-poppin p-5">
        <h1 className="">Location de linge de Maison </h1>
        <div className="grid grid-cols-5 ">
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-3">
              {data.products.map((product) => (
                <ProductItem product={product} key={product.slug} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
