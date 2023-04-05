// import { useState } from 'react';
// import './Login.css';
// import { Link, useHistory } from 'react-router-dom';

// export default function Login() {
//   const history = useHistory();

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);

//   const validUsers = [
//     { username: "user1", password: "password1", name: "John Doe" },
//     { username: "user2", password: "password2", name: "Jane Smith" },
//     { username: "user3", password: "password3", name: "Bob Johnson" },
//     { username: "user4", password: "password4", name: "John Bang" },
//     { username: "user5", password: "password5", name: "Jonathan Smith" },
//     { username: "user6", password: "password6", name: "Bill Johnson" },
//   ];

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//     setError(false);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setError(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const user = validUsers.find(
//       (user) => user.username === username && user.password === password
//     );
//     if (user) {
//       // User is authenticated, do something with user data
//       console.log('User authenticated:', user);
//       history.push('/Home'); // Redirect to Home page
//     } else {
//       // Authentication failed, display error message
//       setError(true);
//     }
//   };

//   return (
//     <div className="form">
//       <div className="gdcs">
//         <h1>Login to continue</h1>
//       </div>

//       {/* Show error message if there is one */}
//       {error && <p className="error">Invalid username or password</p>}

//       <form className="form" onSubmit={handleSubmit}>
//         <label className="label">Username</label>
//         <input
//           onChange={handleUsernameChange}
//           className="input"
//           value={username}
//           type="text"
//         />

//         <label className="label">Password</label>
//         <input
//           onChange={handlePasswordChange}
//           className="input"
//           value={password}
//           type="password"
//         />

//         <button className="btn" type="submit">
//           Login
//         </button>

//         <Link to="/Home">About</Link>
//       </form>
//     </div>
//   );
// }
import { useState } from 'react';
import '../styles/Login.css';
import { users } from './users.js';
// import Home from './Home';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
  //login bttn
  const history = useHistory();

  //   const handleClick = () => {
  //     history.push('/another-screen');
  //   }
  // States for registration

  const [username, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [username, setUsername] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const user = validUsers.find((user) => user.username === username && user.password === password);
  //   if (user) {
  //     // User is authenticated, do something with user data (e.g. set current user in AuthContext)
  //     console.log('User authenticated:', user);
  //   } else {
  //     // Authentication failed, display error message
  //     setError('Invalid username or password');
  //   }
  // };
  // const name = user?.name;
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (users) {
      setPassword('');
      console.log('authenticated:', user);
      setError('Welcome back..');
      setName('');
      // history.push('/Home'); // Redirect to home page on successful login
    } else {
      setError('Invalid username or password');
    }
  };

  // const handleSubmit = (e) => {
  // e.preventDefault();
  // // const user = validUsers.find(
  // //     (u) => u.username === name && u.password === password
  // //   );

  // //   if (user) {
  // //     // If the user is valid, set the currentUser in the AuthContext
  // //     setCurrentUser(user);
  // //   } else {
  // //     // If the user is not valid, display an error message
  // //     setError("Invalid username or password");
  // //   }

  // if (name != '2100102394' || password != '2100102394') {
  // setError(true)
  // setName('')
  // setPassword('');
  // history.push('/Home');
  // } else {
  // setSubmitted(true);
  // setError(false);
  // }
  // };

  // Showing success message
  // const successMessage = () => {
  // return (
  // <div
  // className="success"
  // style={{
  // display: submitted ? '' : 'none',
  // }}>
  // <h1>{username} Please enter all  fields</h1>
  // </div>
  // );
  // };

  // Showing error message if error is true
  // const errorMessage = () => {
  // return (
  // <div
  // className="error"
  // style={{
  // display: error ? '' : 'none',
  // }}>
  // <h1>Successfuly loged in</h1>
  // </div>
  // );
  // };

  return (
    <div className="form">
      <div className="gdcs">
        <h1>Login to continue</h1>
      </div>

      <div className="error">{error && <p>{error}</p>}</div>

      {/* Calling to the methods
<div className="messages">
{errorMessage()}
{successMessage()}
</div> */}

      <form className="form">
        {/* Labels and inputs for form data */}
        <label className="label">User Name</label>
        <input
          onChange={handleName}
          className="input"
          value={username}
          type="text"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          login
        </button>

        <Link to="/Home"> Become a GDCS member </Link>
      </form>
    </div>
  );
}
