import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Initialize the state with the value stored in localStorage, or with the initial value
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Parse the stored JSON value or return the initial value if it doesn't exist
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      // Return the initial value if there's an error
      return initialValue;
    }
  });

  // Update the localStorage value whenever the state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
    // Re-run this effect whenever the state or key changes
  }, [key, value]);

  // Set the state to a new value, and update the localStorage value
  const setLocalState = (newValue) => {
    try {
      // Allow value to be updated based on a function
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;
      setValue(valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  // Update the localStorage object with new key-value pairs
  const updateLocalState = (newValues) => {
    setLocalState((prevValue) => {
      const updatedValue = {
        ...prevValue,
        ...newValues,
      };
      return updatedValue;
    });
  };

  // Remove the value from localStorage, and reset the state to the initial value
  const removeLocalState = () => {
    try {
      window.localStorage.removeItem(key);
      setValue(initialValue);
    } catch (error) {
      console.error(error);
    }
  };

  // Get the value from localStorage, or return the initial value if it doesn't exist
  const getLocalState = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  };

  // Return the state and utility functions for updating and getting the value from localStorage
  return {
    value,
    setLocalState,
    updateLocalState,
    removeLocalState,
    getLocalState,
  };
};

export default useLocalStorage;
