import Chalet from '../../models/Chalet';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await Chalet.deleteMany();
  await Chalet.insertMany(data.chalets);
  await db.disconnect();
  res.send({ message: 'Chalet seeded successfully' });
};

export default handler;
