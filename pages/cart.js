import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

function CartScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };
  return (
    <Layout title="Shopping Cart">
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center">
          Votre Pannier est vide{' '}
          <div>
            <Link href="/">Retour à la page accueil </Link>
          </div>
          <div>
            {' '}
            <Link href="/linge">Commande de draps </Link>
          </div>
        </div>
      ) : (
        <div className="rounded-md shadow-md text-xs text-slate-900 font-poppin ">
          <h1 className="p-4 text-xl">Pannier</h1>
          <div className="md:grid grid-cols-4 ">
            <div className="col-span-3 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="p-5 text-left">Article</th>
                        <th className="p-5 text-right">Quantité</th>
                        <th className="p-5 text-right">Prix</th>
                        <th className="p-5">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.slug} className="border-b">
                          <td>
                            <div className="flex items-center">
                              <Link href={`/product/${item.slug}`}>
                                <a className="flex items-center p-2">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                    className="rounded"
                                  />
                                  &nbsp;
                                </a>
                              </Link>
                              <p> {item.name}</p>
                            </div>
                          </td>
                          <td className="p-5 text-right">
                            <select
                              value={item.quantity}
                              // value={item.countInStock}
                              onChange={(e) =>
                                updateCartHandler(item, e.target.value)
                              }
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="p-5 text-right">{item.price} €</td>
                          <td className="p-5 text-center">
                            <button onClick={() => removeItemHandler(item)}>
                              <XCircleIcon className="h-5 w-5 hover:text-red-500"></XCircleIcon>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className=" p-5">
              <ul>
                <li>
                  <div className="pb-3 text-xl">
                    Sous Total ({cartItems.reduce((a, c) => a + c.quantity, 0)})
                    : {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}€
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => router.push('login2?redirect=/shipping')}
                    className="primary-button w-full text-white font-semibold"
                  >
                    Check Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
