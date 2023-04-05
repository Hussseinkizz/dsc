import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const DarkModeComponent = () => {
  // Initialize the dark mode state using the "dark-mode" key in localStorage
  const {
    value: isDarkMode,
    setValue,
    removeLocalState,
  } = useLocalStorage('dark-mode', false);

  // Handle toggle of dark mode
  const handleToggleDarkMode = () => {
    // Toggle the value of isDarkMode
    setValue(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Welcome to my DarkModeComponent</h1>
      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeComponent;
