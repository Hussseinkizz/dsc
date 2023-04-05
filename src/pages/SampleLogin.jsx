import React, { useEffect } from 'react';
import { reactState } from 'react-hands';
import useLocalStorage from '../hooks/useLocalStorage_Lite';
import useJsonServer from '../hooks/useJsonServer';
import { nanoid } from 'nanoid';
import { useTimeFormat } from '../hooks/useTimeFormat';

const SampleLogin = () => {
  // Make an API call to sign the user in and say its newUser
  const { data, create, update, remove, filter } = useJsonServer(
    'http://localhost:3000/users'
  );
  // basically on login check if they exist in db and return stuff and save
  const signedInUser = { id: 123, name: 'John Doe', password: '123' };
  // Initialize the user state using the "user" key in localStorage
  const {
    storedValue: user,
    setLocalState,
    removeLocalState,
    getLocalState,
  } = useLocalStorage('user', null);

  // initialize react hands stuff
  const { useStore } = reactState();
  const [state, dispatch] = useStore();

  const handleSignup = () => {
    // Make an API call to sign up the user and say its newUser
    // basically create their profile in db and return stuff and save to local
    const newUser = { id: 345, name: 'Kizz Code', password: 'foobar' };
    setLocalState('user', newUser);
    const storedUser = getLocalState('user');
    dispatch({ type: 'setUser', payload: storedUser });
  };

  const handleLogin = () => {
    setLocalState('user', signedInUser);
    const storedUser = getLocalState('user');
    dispatch({ type: 'setUser', payload: storedUser });
  };

  const handleLogout = () => {
    removeLocalState('user');
    dispatch({ type: 'unSetUser' });
  };

  function createUserInDB() {
    // generate a new user and unique user Id
    let newUniqueUserId = nanoid(6); // 6 = size of id

    let newUser = {
      id: newUniqueUserId,
      role: 'admin',
      phone: '0704353301',
      username: 'Kizz Kizz',
      password: '1990',
      email: 'kizz@gmail.com',
      dateCreated: useTimeFormat(),
      dateModified: useTimeFormat(),
    };
    create(newUser);
    console.log(data);
  }

  function getAdminsOnly() {
    // filter can do any filter in form of where a = b, eg
    // filter where role = admin
    filter('role', 'admin');
    console.log(data);
  }

  // get localStorage value on page load
  useEffect(() => {
    const storedUser = getLocalState('user');
    dispatch({ type: 'setUser', payload: storedUser });
  }, []);

  return (
    <div className="is-flex">
      <h1>Hey user is {state.user ? state.user.name : 'No User!'}</h1>
      <button onClick={handleLogout}>logout</button>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleSignup}>signup</button>
      <button onClick={createUserInDB}>Create User</button>
    </div>
  );
};

export default SampleLogin;
