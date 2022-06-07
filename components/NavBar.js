import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import { LoginIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function NavBar({ title }) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>
          {title
            ? title + '- conciergerie saint gervais'
            : 'Conciergerie Saint Gervais'}
        </title>
        <meta name="description" content="conciergerie saint gervais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-14 border-b-[1px] border-slate-200 flex justify-between p-6 items-center ">
        <Link href={'/'}>
          <div className="h–[20px] cursor-pointer h-10">
            {/* <Image src="/logo.png" alt="logo" width={45} height={45} priority /> */}
          </div>
        </Link>

        <div className="flex items-center">
          <Link href={'/'}>
            <div className="cursor-pointer flex relative  mr-4 font-poppin text-sm hover:text-bleu">
              accueil
            </div>
          </Link>
          <Link href={'/hebergement'}>
            <div className="cursor-pointer flex relative mr-4 font-poppin text-sm hover:text-bleu">
              hebergement
            </div>
          </Link>
          <Link href={'/linge'}>
            <div className="cursor-pointer flex relative  mr-4 font-poppin text-sm hover:text-bleu">
              location linge
            </div>
          </Link>
          <Link href={'/contact'}>
            <div className="cursor-pointer flex relative  mr-4 font-poppin text-sm hover:text-bleu">
              contact
            </div>
          </Link>

          <div className=" cursor-pointer flex relative items-center">
            <Link href="/cart">
              <ShoppingBagIcon className=" h-5 w-5 text-bleu mr-4 " />
            </Link>
            {cartItemsCount > 0 && (
              <span className="cursor-pointer absolute flex justify-center items-center h-4 w-4 text-[10px] -top-[7px] -right-[6px] text-white bg-red-500 mr-4 rounded-full border-[1px] border-white">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </span>
            )}
          </div>

          <Link href="/login">
            <LoginIcon className="h-5 w-5 text-bleu mr-4 " />
          </Link>
          <Image
            src="/avatar.jpg"
            alt="avatar"
            width={25}
            height={25}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
