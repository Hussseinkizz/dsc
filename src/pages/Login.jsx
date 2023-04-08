import { Link, useNavigate } from 'react-router-dom';
import * as Icons from 'react-icons/hi';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage_Lite';
import useJsonServer from '../hooks/useJsonServer';
import { reactState } from 'react-hands';

const schema = z.object({
  email: z.string().email('Invalid email').nonempty('Email is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .nonempty('Password is required'),
});

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [noUserFound, setNoUserFound] = useState(false);

  // intiate server stuff, backend api
  const { withCustomQuery } = useJsonServer('http://localhost:5000/users');

  // Initialize the user state using the "user" key in localStorage
  const { setLocalState } = useLocalStorage('user', null);

  // initialize react hands stuff
  const { useStore } = reactState();
  const [state, dispatch] = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // react router stuff
  let navigate = useNavigate();

  const handleSignin = (data) => {
    // get user inputs, username and password, check if any user has them in users in db, if yes, set that as signed user in state else tell user to signup

    let queryString = `?email=${data.email}&password=${data.password}`;

    withCustomQuery(queryString).then((foundUsers) => {
      console.log(foundUsers);
      if (foundUsers.length !== 0) {
        // set user in local state, global state will pick it from there!
        setLocalState('user', foundUsers[0]);
        // then set that user in global state
        dispatch({ type: 'setUser', payload: foundUsers[0] });
        // then redirect to home screen
        return navigate('/');
      } else {
        setNoUserFound(true);
        console.log('Not Found', data);
      }
    });
  };

  return (
    <main className="w-full flex flex-col items-center justify-center px-4 p-[clamp(8vh,12vh,6vh)]">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <Link to="/" className="flex gap-2 justify-center items-center">
            <Icons.HiAcademicCap className="w-6 h-6" />
            <span className="flex font-bold">DSC UCU Community</span>
          </Link>
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Welcome Back!
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleSignin)} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              {...register('email')}
              className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="font-medium">Password</label>
            <div className="flex relative">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                {...register('password')}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <div className="flex absolute right-2 top-5 pl-4">
                {isPasswordVisible ? (
                  <Icons.HiEye
                    className="h-5 w-5 text-slate-400 transition ease-linear"
                    onClick={() => setIsPasswordVisible(false)}
                  />
                ) : (
                  <Icons.HiEyeOff
                    className="h-5 w-5 text-slate-400 transition ease-linear"
                    onClick={() => setIsPasswordVisible(true)}
                  />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 mt-2">{errors.password.message}</p>
            )}
            {noUserFound && (
              <p className="text-red-500 mt-2">
                No Such Account, Please Signup Instead!
              </p>
            )}
          </div>
          <button
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 active:scale-95 transition ease-linear rounded-lg duration-150"
            type="submit">
            Sign in
          </button>
          <div className="w-full flex flex-col justify-between items-center gap-4 text-center">
            <p className="flex gap-2">
              Don't have an account?
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </Link>
            </p>
            <Link to="/forget-password" className="hover:text-indigo-600">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
