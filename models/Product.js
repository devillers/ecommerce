import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  rating: { type: Number },
  numReviews: { type: Number },
  countInStock: { type: Number },
  description: { type: String },
});

const product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default product;
