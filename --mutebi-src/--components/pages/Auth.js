import React, { useState } from 'react';


import Login from '../auth/Login';

import Register from '../auth/Register';


function Auth() {
  const [viewForm, setViewForm] = useState(true)
  const viewforms = async()=>{
    setViewForm(!viewForm)

  }

  return (
    // <Layout>
      <div >
        {
          viewForm? <Login viewForm={viewForm} setViewForm={setViewForm}/>:<Register viewForm={viewForm} setViewForm={setViewForm}/>
        }
        
        
        
      </div>
    
  );
}

export default Auth;
