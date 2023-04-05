import { useContext } from "react";
import AuthContext from "../context/Auth";

const useAuth = () => {
  const  { auth, verifyAuth, setAuth} = useContext(AuthContext);
  return { auth, verifyAuth, setAuth };
}

export default useAuth;