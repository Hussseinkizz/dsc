import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/hi';

export default function AppBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Events', path: '/events' },
    { title: 'Community', path: '/community' },
    { title: 'Projects', path: '/projects' },
  ];

  return (
    <nav className="bg-slate-900 text-slate-50 w-full border-b md:border-0 md:static shadow">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/" className="flex gap-2 justify-center items-center">
            <Icons.HiAcademicCap className="w-6 h-6" />
            <span className="flex font-bold">DSC UCU Community</span>
          </Link>
          <div className="md:hidden">
            <button
              className="text-slate-100 outline-none p-2 rounded-md focus:border-slate-500 focus:border"
              onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            isExpanded ? 'block' : 'hidden'
          }`}>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-slate-300 hover:text-indigo-600 font-semibold">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          {/* Show Account If User Signed In */}
          <Link
            to="/signup"
            className="py-3 px-4 text-white font-semibold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:opacity-90 transition ease-linear rounded-md active:scale-90 will-change-auto shadow">
            Join Community
          </Link>
        </div>
      </div>
    </nav>
  );
}
