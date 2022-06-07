import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <div
      className="mx-auto flex h-screen justify-center flex-col items-center max-w-screen-md font-poppin"
      onSubmit={handleSubmit(submitHandler)}
    >
      <Head>
        <title>login page</title>
      </Head>
      <form className="mb-10">
        <h1 className="text-xl mb-4">Login page</h1>
        <div className="mb-4">
          <label className="text-sm" htmlFor="email">
            email
          </label>
          <input
            className="w-full border-bleu border-b-[1px] outline-none hover:border-amber-400 text-sm text-bleu"
            type="email"
            id="email"
            autoFocus
            {...register('email', {
              required: 'Veuillez indiquer votre adresse mail svp',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Faites un effort s&apos;il vous plait',
              },
            })}
          />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-8">
          <label className="text-sm " htmlFor="password">
            password
          </label>
          <input
            className="w-full border-bleu border-b-[1px] outline-none hover:border-amber-400 text-sm text-bleu"
            type="password"
            id="password"
            autoFocus
            {...register('password', {
              required: 'veuillez choisir un mot de passe consistant',
              minLength: {
                value: 6,
                message:
                  'votre mot de passe doit contenir au minimum 6 characteres',
              },
            })}
          />
          {errors.password && (
            <div className="text-red-500 text-sm">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="mb-4">
          <button className="primary-button w-full">login</button>
        </div>
        <div className="mb-4">
          <p className="text-sm">Don&apos;t have an account ? &nbsp; </p>
          <Link href="/register">
            <a className="text-sm text-red-500">Register</a>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
