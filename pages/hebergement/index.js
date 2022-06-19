import ChaletItem from '../../components/ChaletItem';
import Layout from '../../components/Layout';
import data from '../../utils/data';

export default function Hebergement({ chalets }) {
  console.log(chalets);
  return (
    <Layout title="Hebergement">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data.chalets.map((chalet) => (
          <ChaletItem chalet={chalet} key={chalet.slug} />
        ))}
      </div>
    </Layout>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch({data});
//   const chalets = await res.json();
//   return {
//     props: {
//       chalets,
//     },
//   };
// };
