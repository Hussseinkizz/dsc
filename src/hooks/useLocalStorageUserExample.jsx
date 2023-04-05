import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const UserComponent = () => {
  // Initialize the user state using the "user" key in localStorage
  const {
    value: user,
    setLocalState,
    removeLocalState,
  } = useLocalStorage('user', null);

  // Handle sign-in
  const handleSignIn = () => {
    // Make an API call to sign the user in
    const signedInUser = { id: 123, name: 'John Doe' };
    // Store the signed-in user in localStorage
    setLocalState('user', signedInUser);
  };

  // Handle sign-out
  const handleSignOut = () => {
    // Remove the user from localStorage
    removeLocalState('user');
  };

  return (
    <div>
      {user ? (
        // Display the signed-in user's name and a sign-out button
        <>
          <p>Signed in as {user.name}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        // Display a sign-in button
        <button onClick={handleSignIn}>Sign in</button>
      )}
    </div>
  );
};

export default UserComponent;
