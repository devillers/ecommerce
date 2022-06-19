//import Link from 'next/link';
import { db } from '../utils/db';
import Chalet from '../models/Chalet';

const Index = ({ chalets }) => (
  <>
    {chalets.map((chalet) => (
      <div key={chalet._id}>
        <h5>{chalet.name}</h5>
      </div>
    ))}
  </>
);

export async function getServerSideProps() {
  await db();
  const result = await Chalet.find({});
  const chalets = result.map((doc) => {
    const chalet = doc.toObject();
    chalet._id = chalet._id.toString();
    return chalet;
  });
  return { props: { chalets: chalets } };
}

export default Index;
