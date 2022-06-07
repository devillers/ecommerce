//import { useState } from 'react';
//import { createUserWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../firebase';
import { HomeIcon, LockClosedIcon, MailIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Login = () => {
  // const [error, setError] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = (e) => {
  //   e.preventDefault();
  // };

  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  return (
    <div className="flex min-h-screen justify-center items-center  bg-gray-100  ">
      <main className="grid grid-cols-3  h-96 w-1/2 max-w-2xl shadow-2xl rounded-2xl">
        <form
          //onSubmit={handleLogin}
          className="flex flex-col col-span-2 rounded-bl-2xl rounded-tl-2xl p-6 bg-bleu items-center "
        >
          <h1 className="text-xl font-comfortaa text-white font-thin">
            CONCIERGERIE{' '}
            <span className="text-pink-300 font-lobster">
              St Gervais les Bains
            </span>
          </h1>
          <div className="flex flex-col items-center justify-center mt-6">
            <h2 className="text-3xl font-bold text-white ">Sign in Page</h2>
            {/* <div className=" w-12  border-b-[4px] border-b-bleu mt-6"></div> */}
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
            <div className=" mt-2 flex bg-gray-100 w-[200px] p-2 items-center justify-around rounded-sm">
              <MailIcon className="w-5 h-5 text-bleu hover:text-pink-300" />
              <input
                type="email"
                name="email"
                //onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-transparent outline-none text-sm text-gray-500 "
              />
            </div>
            <div className=" mt-2 flex bg-gray-100 w-[200px] p-2  items-center justify-around rounded-sm">
              <LockClosedIcon className="w-5 h-5 text-bleu hover:text-pink-300" />
              <input
                type="password"
                name="password"
                //onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-transparent outline-none text-sm text-gray-500 "
              />
            </div>

            <button
              type="submit"
              className="mt-2 font-comfortaa border-white text-white bg-bleu  border-2 px-6 py-2 rounded-full  font-semibold cursor-pointer hover:text-bleu hover:bg-white "
            >
              login
            </button>
          </div>

          <div className="flex items-center my-5">
            <label className=" flex items-center justify-between text-xs text-white mr-2 ">
              <input
                type="checkbox"
                name="remember"
                className="mr-1 checked:bg-blue-500 border-none"
              />
              Remember me
            </label>
            <p className="text-white text-xs cursor-pointer hover:text-pink-300 ">
              Lost password
            </p>
          </div>
          {/* {error && <span>Email ou mot de passe invalide </span>} */}
        </form>

        <div className="flex flex-col rounded-tr-xl rounded-br-2xl items-center justify-center bg-white font-comfortaa text-bleu ">
          <h2 className=" text-2xl font-black mb-2">Admin Page !!</h2>
          <div className="border w-12 border-b-bleu border-b-2 "></div>
          <p className="text-sm mt-6 px-6 text-center">
            Veuillez revenir sur la page principale
          </p>
          <div className="flex items-center justify-center mt-8">
            <HomeIcon className="w-7 h-7" />
            <Link href="./">
              <a className=" border-bleu bg-white border-2 px-6 py-2 rounded-full ml-3 font-semibold cursor-pointer hover:text-white hover:bg-bleu ">
                {' '}
                accueil
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
