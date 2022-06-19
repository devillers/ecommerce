import NavBar from './NavBar';
import Head from 'next/head';
//import { useSession } from 'next-auth/react';
import Footer from './Footer';
import Header from './Header';
// import Link from 'next/link';
// import React, { useContext, useEffect, useState } from 'react';
// import { Store } from '../utils/Store';


export default function Layout({ children, title }) {
  // const { status, data: session } = useSession();
  // const { state } = useContext(Store);
  // const { cart } = state;
  // const [cartItemsCount, setCartItemsCount] = useState(0);
  // useEffect(() => {
  //   setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  // }, [cart.cartItems]);
  return (
    <>
      <Head>
        <title>
          {title
            ? title + '- conciergerie saint gervais'
            : 'Conciergerie Saint Gervais'}
        </title>
        <meta name="description" content="location linge de maison" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <div className="flex flex-col justify-between min-h-screen">
        <header>
          {/* <nav className="flex h-12 justify-between shadow-sm px-4 items-center">
            <Link href="/">
              <a className="text-red-200 cursor-pointer">conciergerie</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="px-2 cursor-pointer">
                  Panier
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>

            
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link href="/login">
                  <a className="px-2 cursor-pointer">login</a>
                </Link>
              )}
            </div>
          </nav> */}
          <NavBar />
          <Header />
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
