import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../--hooks/useAuth';
import Auth from '../pages/Auth';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(props);
  const { verifyAuth, auth, setAuth } = useAuth();
  const [viewForm, setViewForm] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate('/auth');
      console.log('one');
    }
  }, [auth, navigate]);

  const login = async (e) => {
    e.preventDefault();

    console.log('mukene');
    navigate('/');
    setAuth(!auth);

    fetch(`http://localhost:3000/users?=${email}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // console.log(foundPerson)
        // console.log(data)
      });

    // fetch(`http://localhost:3000/users/email`)
    // .then((res)=>{
    //   res.json()
    // }).then((data)=>{
    //   console.log(data)
    // }).catch((err)=>{
    //   console.log(err.message)
    // })
    // try {
    //   await axios.post(`http://localhost:3000/users`, {
    //     email,
    //     password,
    //   })
    //   await verifyAuth();
    //   navigate('/');

    // } catch (err) {
    //   console.log(err);
    //   verifyAuth();
    // }
  };
  const routing = async () => {
    props.setViewForm(!props.viewForm);
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            DSC_UCU_Community
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {' '}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in into your account
            </a>
          </p>
        </div>
        <form
          onSubmit={login}
          className="mt-8 space-y-6"
          action="#"
          method="POST">
          {/* <input type="email" 
            value={email}
            onChange={e=>setEmail(e.target.value)}
            name="remember" defaultValue="true" /> */}

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500">
              Sign in
            </button>
            <br></br>
            <p className=" text-red-600 hover:cursor-pointer" onClick={routing}>
              I dont have an an account, Register
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
