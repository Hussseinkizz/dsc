import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "./pages/Auth";
import Home from "./pages/Home"

function App() {
  return (
    <>
    <div >
       
        <Routes>
             <Route element={<PrivateRoutes />}>
          <Route path="/"  element={<Home/>} />
          
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>
        
    </div>
  
     
 
   


     
    </>
  );
}

export default App;