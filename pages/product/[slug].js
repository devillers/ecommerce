import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from '../../utils/Store';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const router = useRouter();

  const product = data.products.find((x) => x.slug === slug);
  //console.log(product);
  if (!product) {
    return <div>Produt Not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      <span>Sorry. Product is out of stock</span>;
      alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
  return (
    <Layout title={product.name}>
      <div className="rounded-md shadow-md text-xs text-slate-900 font-poppin p-5 ">
        <div className="p-5">
          <Link href={'/'}>
            <a className="pills">retour accueil</a>
          </Link>
        </div>
        <div className="grid md:grid-cols-5 gap-3">
          <div className="md:col-span-2">
            <div className="relative h-96 w-full">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                //placeholder="blur"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-2 leading-5 p-6">
            <ul>
              <li>
                <h1 className="text-lg">{product.name}</h1>
              </li>
              <li>Categorie: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>
                {product.rating} of {product.numReviews} reviews
              </li>
              <li>Description: {product.description}</li>
            </ul>
          </div>
          <div>
            <div className="card p-6">
              <div className="mb-2 flex justify-between">
                <div>Prix</div>
                <div>{product.price} €</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div className="flex w-full justify-between">
                  Status
                  <div>
                    {product.countInStock > 0 ? (
                      <div className="inStock">En stock</div>
                    ) : (
                      <div className="outOfStock">Stok épuisé</div>
                    )}
                  </div>
                </div>
              </div>
              <button
                className="primary-button w-full"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
