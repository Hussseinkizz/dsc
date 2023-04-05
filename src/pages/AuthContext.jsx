import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  const loginUser = (user) => {
    setCurrentUser(user);
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser: currentUser, loginUser: loginUser, logoutUser: logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;