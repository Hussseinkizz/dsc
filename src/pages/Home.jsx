import React, { useEffect } from 'react';
import { reactState } from 'react-hands';
import useLocalStorage from '../hooks/useLocalStorage_Lite';
// import Carousel from '../components/Carousel';
import { Redirect } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import BlogCards from '../components/BlogCards';

const Home = () => {
  const { getLocalState } = useLocalStorage('user', null);

  // initialize react hands stuff
  const { useStore } = reactState();
  const [state, dispatch] = useStore();

  // get localStorage value on page load
  useEffect(() => {
    const storedUser = getLocalState('user');
    dispatch({ type: 'setUser', payload: storedUser });
  }, []);

  // protect route if no user logged in
  // if (!state.user) {
  //   return <Redirect to="/signup" />;
  // }

  // else show the home page
  return (
    <section className="w-full flex flex-col justify-start items-center">
      <HeroSection />
      {/* The Blogs */}
      <BlogCards />
      {/* The Events */}
      {/* The Projects */}
    </section>
  );
};

export default Home;
