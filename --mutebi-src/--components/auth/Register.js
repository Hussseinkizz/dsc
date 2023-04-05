import axios from 'axios';
import React, { useState } from 'react';


function Register(props) {
  const [fullName, setFullName]= useState('1')
  const [email, setEmail]= useState('2')
  const [password, setPassword]= useState('3')
  const [phone, setPhone]= useState('4')
  const [people, setPeople]=useState([])

  const register = async (e) => {
    e.preventDefault();
    if(fullName && email && password && phone){
      const person = {fullName, email, password, phone}
      setPeople((people)=>{
        return [...people, person]

      })
    }
    // const user = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   password: e.target.password.value,
    //   phone: e.target.phone.value,
    // };
    try {
      await axios.post(`http://localhost:3000/users`, people)
      .then((data)=>{
        console.log(data.data)
      });
      
    } catch (err) {
      console.log(err);
     
    }
  };
   const routing = async()=>{
    props.setViewForm(!props.viewForm)
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
      <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">Register</h1>
 
      <form className="mt-6" onSubmit={register}>
        <div className="mb-2">
        <label htmlFor="name"
        className="block text-sm font-semibold text-gray-800">
          Full Name:
          <input name="name" type="text" 
          value={fullName}
          className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Full Name"
          id='name'
          onChange={e=>setFullName(e.target.value)}
          required />
        </label>
        </div>
        <div className="mb-2">

        <label 
         className="block text-sm font-semibold text-gray-800"
        htmlFor="email">
          email:
          <input name="email" type="email" 
          value={email}
          id='email'
          onChange={e=>setEmail(e.target.value)}
           className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="email" required />
        </label>
        </div>
        <br />
        <div className="mb-2">
        <label htmlFor="password"
         className="block text-sm font-semibold text-gray-800">
          password:
          <input
            name="password"
            type="password"
            id='password'
            value={password}
            onChange={e=>setPassword((e.target.value))}
            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="password"
            required
          />
        </label>
        </div >
        <div className="mb-2">
         <label htmlFor="phone"
          className="block text-sm font-semibold text-gray-800">
          Phone_N0:
          <input
            name="phone"
            type="text"
            id='phone'
            placeholder="phone"
            value={phone}
            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={e=>setPhone(e.target.value)}
            required
          />
        </label>
        </div>
        <br />
        <button type="submit">Register</button>
        <p className=" text-red-600 hover:cursor-pointer" onClick={routing}>Already have an account</p>
      </form>
      {
        console.log(people)
      }
      </div>
    </div>
  );
}

export default Register;






//   const [username, setUserName] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setconfirmPassword] = useState('')
//   const [phone, setPhone] = useState('');
//   const [otherDetails, setOtherDetails] = useState('');
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [newUser, setNewUser] = useState({username: "", password: "", name: ""});

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(true);
//   const [emailError, setEmailError] = useState('');

//   const history = useHistory();

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }

//   // Handling the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === '' ||username === '' || email === '' || password === '' || password === '' || confirmpassword ==='') {
//       setError(true);
     
//     } else if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address.');
//       console.log(username, email, phone, otherDetails);
//     } else {

//       const newUser = { username, password, name };
//     users.push(newUser);

//     setUserName("");
//     setPassword("");
//     setName("");
//     setSubmitted(true);
  

//       console.log(username, name,  email, phone, otherDetails);
//       setSubmitted(true);
//          setError(false);
   
//       setFormSubmitted(true)
//       history.push('/Home');
//     }
//   };

  
//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };

//   //handle the input change for the new user's information
//   const handleNewUserChange = (event) => {
//     setNewUser({
//       ...newUser,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleUserName = (e) => {
//     setUserName(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     // setSubmitted(false);
//   };

//   const handleConfirmPassword = (e) => {
//     setconfirmPassword(e.target.value);
//     setSubmitted(false);
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div className="signupsuccess" style={{ display: submitted ? '' : 'none' }}>
//         <h1> {name} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div className="signuperror" style={{ display: error ? '' : 'none' }}>
//         <h1>Fill all fields</h1>
//       </div>
//     );
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Add the new user to the validUsers array
//   setUsers([...users, newUser]);
//   // Clear the new user's information
//   // setNewUser({username: "", password: "", name: ""});
//     // validate form data here

//     setFormSubmitted(true);
//   };

//   if (formSubmitted) {
//     return (
//       <RegistrationConfirmation
        
//         name={name}
//         username={username}
//         email={email}
//         phone={phone}
//         otherDetails={otherDetails}
//       />
//     );
//   }

// return (
// <div >
// <div >
// <h1>UCU GDCS Member Registration</h1>
// </div>

// {/* Calling to the methods */}
// <div className="messages">
// {errorMessage()}
// {successMessage()}
// </div>


// </div>
// );
//  };