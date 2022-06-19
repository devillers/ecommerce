import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { getError } from '../utils/error';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { MailIcon, LockClosedIcon } from '@heroicons/react/outline';

export default function LoginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Login">
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen justify-center items-center  ">
        <main className="grid grid-cols-5  max-w-2xl shadow-2xl rounded-2xl">
          <form
            className="flex flex-col col-span-3 rounded-tl-2xl rounded-bl-2xl p-6 bg-bleu items-center "
            onSubmit={handleSubmit(submitHandler)}
          >
            <h1 className="text-xl font-comfortaa text-white font-thin">
              CONCIERGERIE{' '}
              <span className="text-pink-300 font-lobster">
                St Gervais les Bains
              </span>
            </h1>
            <div className="flex flex-col items-center justify-center mt-6">
              <h2 className="text-3xl font-bold text-white ">Sign in Page</h2>
            </div>
            <div className="flex justify-center mt-2 ">
              <div className=" group cursor-pointer m-3 p-4 rounded-full border-2 border-white w-5 h-5 flex items-center justify-center hover:bg-white ">
                <a className="text-white text-xl group-hover:text-bleu ">f</a>
              </div>
              <div className="group cursor-pointer m-3 p-4 rounded-full border-2 border-white  w-5 h-5 flex items-center justify-center hover:bg-white ">
                <a className="text-white text-xl group-hover:text-bleu">G</a>
              </div>
              <div className="group cursor-pointer m-3 p-4 rounded-full border-2 border-white  w-5 h-5 flex items-center justify-center hover:bg-white ">
                <a className="text-white text-xl group-hover:text-bleu">in</a>
              </div>
            </div>
            <p className="mb-0 mt-5 text-white text-sm">
              or use your email account
            </p>
            <div className=" flex flex-col">
              <div className=" mt-2 flex flex-col bg-gray-100 w-[200px] p-2 items-center justify-around rounded-sm">
                <div className="flex">
                  <MailIcon className="w-5 h-5 text-bleu hover:text-pink-300 mr-2" />
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Renseignez votre adresse email',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: 'Une adresse email valide ',
                      },
                    })}
                    className="w-full text-xs p-1 outline-none text-gray-600"
                    id="email"
                    autoFocus
                  />
                </div>

                {errors.email && (
                  <div className="text-pink-400 text-xs mt-1">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className=" mt-2 flex flex-col bg-gray-100 w-[200px] p-2  items-center justify-around rounded-sm">
                <div className="flex">
                  <LockClosedIcon className="w-5 h-5 text-bleu hover:text-pink-300 mr-2" />
                  <input
                    type="password"
                    {...register('password', {
                      required: 'Renseignez votre mot de passe',
                      minLength: {
                        value: 6,
                        message: 'mot de passe trop court',
                      },
                    })}
                    className="w-full text-xs p-1 outline-none text-gray-600"
                    id="password"
                    autoFocus
                  />
                </div>

                {errors.password && (
                  <div className="text-pink-400 text-xs mt-1">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 font-comfortaa border-white text-white bg-bleu  border-2 px-6 py-2 rounded-full  font-semibold cursor-pointer hover:text-bleu hover:bg-white "
              >
                login
              </button>
            </div>

            <div className="flex flex-col items-center my-5">
              <label className=" flex items-center justify-between text-xs text-white mr-2 ">
                <div className="mb-4 flex">
                  Don&apos;t have an account? &nbsp;
                  <Link href={`/register?redirect=${redirect || '/'}`}>
                    Register
                  </Link>
                </div>
              </label>
              <p className="text-white text-xs cursor-pointer hover:text-pink-300 ">
                Lost password
              </p>
            </div>
          </form>
        </main>
      </div>
    </Layout>
  );
}
