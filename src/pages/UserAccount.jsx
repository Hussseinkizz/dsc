import React, { useEffect, useState } from 'react';
import AppBar from '../components/AppBar';
import { reactState } from 'react-hands';
import * as Icons from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage_Lite';

const UserAccount = () => {
  // Note: this component immediately on page load gets the loggedin user, and displays button to thier account if they're loggedin else it shows join community button. It maintains this even after page refresh or browser close and open, it first reads the state in local sotrage sets it to global state and maintains it

  // Initialize the user state using the "user" key in localStorage
  const { getLocalState, removeLocalState } = useLocalStorage('user', null);

  let navigate = useNavigate();

  // protect Route in that it redirects if no user logged in
  useEffect(() => {
    let storedUser = getLocalState('user');
    if (storedUser === null || (storedUser === undefined && !storedUser)) {
      return navigate('/');
    }
  }, []);

  // initialize react hands stuff
  const { useStore } = reactState();
  const [state, dispatch] = useStore();

  // function generates user initials and use them as avatar!
  function getInitials(fullName) {
    const names = fullName.split(' ');
    const initials = names.map((name) => name[0]).join('');
    return initials.toUpperCase();
  }

  // get current user from state
  let user = state?.user;
  let userInitials = getInitials(user?.username);

  const userInfo = [
    {
      item: 'community role',
      data: user.role,
      icon: <Icons.HiUser className="w-5 h-5" />,
    },
    {
      item: 'phone contact',
      data: user.phone,
      icon: <Icons.HiPhone className="w-5 h-5" />,
    },
    {
      item: 'email',
      data: user.email,
      icon: <Icons.HiMail className="w-5 h-5" />,
    },
    {
      item: 'password',
      data: user?.password.split('').map((key) => '*'),
      icon: <Icons.HiKey className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <AppBar />
      <section className="w-full flex flex-col justify-start items-center pt-16">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full md:w-1/2 md:mx-auto">
          <div className="flex flex-col gap-2 items-center justify-center">
            <span className="p-4 rounded-full grid place-items-center text-white font-semibold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
              {userInitials}
            </span>
            <span className="flex">{user?.username}</span>
          </div>
          {/* The Profile Edit Button */}
          <button className="flex px-4 py-2 rounded-lg bg-purple-300 justify-center items-center gap-2 transition ease-linear hover:bg-purple-200">
            Edit Profile
          </button>
        </div>
        {/* The user Info Wrapper */}
        <section className="flex w-full gap-4 md:w-4/5 md:mx-auto border-t mt-4 pt-4 border-slate-300 flex-col md:flex-row">
          {userInfo.map((info) => (
            <div className="flex flex-col w-full gap-2 items-center justify-center">
              <span className="flex">{info.icon}</span>
              <span className="flex font-semibold capitalize">{info.item}</span>
              <span className="flex">{info.data}</span>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default UserAccount;
