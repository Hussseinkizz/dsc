import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
axios.defaults.withCredentials = true

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);
  
  const verifyAuth = async () => {
    try {
    const isLoggedIn = await axios.get(`http://localhost:3000/isLoggedIn`);
    console.log(isLoggedIn.data)
    
   
    setAuth(isLoggedIn.data.data);
    return isLoggedIn.data;
      
    } catch(err) {
      console.log(err)
      return false
    }
       
  };

  useEffect(() => {
    
    verifyAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, verifyAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;



