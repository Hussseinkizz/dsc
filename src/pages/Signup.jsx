import { Link, useNavigate } from 'react-router-dom';
import * as Icons from 'react-icons/hi';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { reactState } from 'react-hands';
import useLocalStorage from '../hooks/useLocalStorage_Lite';
import useJsonServer from '../hooks/useJsonServer';
import { nanoid } from 'nanoid';

// define the form validation schema, what should be what!
const schema = z.object({
  email: z.string().email('Invalid email').nonempty('Email is required'),
  username: z.string().nonempty('Username is required'),
  phone: z
    .string()
    .min(10, 'Phone must be at least 10 numbers')
    .max(10, 'Phone must be at max 10 numbers')
    .nonempty('Phone Number is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .nonempty('Password is required'),
});

export default function Signup() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // intiate server stuff, backend api
  const { create } = useJsonServer('http://localhost:5000/users');

  // Initialize the user state using the "user" key in localStorage
  const { setLocalState } = useLocalStorage('user', null);

  // initialize react hands stuff
  const { useStore } = reactState();
  const [state, dispatch] = useStore();

  // helper fucntion to get current time in desired format
  function timeFormatter() {
    const date = new Date();

    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      date
    );
    // console.log(formattedDate); // output: "3 April 2023 2:13 AM"
    return formattedDate;
  }

  // intialize react hook form stuff
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // function that gets user data from form and creates the user db.json using useJsonServer hook then redirects user to homescreen if signup successful!
  let navigate = useNavigate();

  const handleSignup = (data) => {
    // generate a new user and unique user Id
    let newUniqueUserId = nanoid(6); // 6 = size of id

    let newUser = {
      id: newUniqueUserId,
      role: 'member',
      phone: data.phone,
      username: data.username,
      password: data.password,
      email: data.email,
      dateCreated: timeFormatter(),
      dateModified: timeFormatter(),
    };
    // create user in DB
    create(newUser).then((user) => {
      // console.log(user);
      // set user in local state, global state will pick it from there!
      setLocalState('user', user);
      // then set that user in global state
      dispatch({ type: 'setUser', payload: user });
      // then redirect to home screen
      if (user) {
        return navigate('/');
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
              Create An Account.
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleSignup)} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Username</label>
            <input
              type="text"
              {...register('username')}
              className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.username && (
              <p className="text-red-500 mt-2">{errors.username.message}</p>
            )}
          </div>
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
            <label className="font-medium">Phone</label>
            <input
              type="tel"
              {...register('phone')}
              className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 mt-2">{errors.phone.message}</p>
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
          </div>
          <button
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 active:scale-95 transition ease-linear rounded-lg duration-150"
            type="submit">
            Sign up
          </button>
          <div className="w-full flex flex-col justify-between items-center gap-4 text-center">
            <p className="flex gap-2">
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            </p>
            <Link
              to="#"
              className="hover:text-indigo-600 flex gap-2 items-center justify-center w-full text-sm">
              <Icons.HiExternalLink />
              <span className="flex">
                By Signing Up You Agree To Terms And Conditions
              </span>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
