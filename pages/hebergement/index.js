//import Link from 'next/link';
import ChaletItem from '../../components/ChaletItem';
import Layout from '../../components/Layout';
import db from '../../utils/db';
import Chalet from '../../models/Chalet';

const Hebergement = ({ chalets }) => (
  <Layout title="Hebergement">
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {chalets.map((chalet) => (
        <ChaletItem chalet={chalet} key={chalet._id} />
      ))}
    </div>
  </Layout>
);

export async function getStaticProps() {
  await db.connect();

  const res = await Chalet.find({});
  const chalets = res.map((doc) => {
    const chalet = doc.toObject();
    chalet._id = chalet._id.toString();
    return chalet;
  });
  return {
    props: {
      chalets: JSON.parse(JSON.stringify(chalets)),
    },
  };
}

export default Hebergement;
