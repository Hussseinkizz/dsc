import RegistrationConfirmation from './RegistrationConfirmation';
import { useState } from 'react';
import '../styles/Signup.css';
import { Link, useHistory } from 'react-router-dom';

export default function Signup() {
  // States for registration
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    name: '',
  });

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(true);
  const [emailError, setEmailError] = useState('');

  // const history = useHistory();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === '' ||
      username === '' ||
      email === '' ||
      password === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      setError(true);
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      console.log(username, email, phone, otherDetails);
    } else {
      const newUser = { username, password, name };
      users.push(newUser);

      setUserName('');
      setPassword('');
      setName('');
      setSubmitted(true);

      // console.log(username, name, email, phone, otherDetails);
      setSubmitted(true);
      setError(false);
      //   setEmail('');
      //   setName('');
      //   setPassword('');
      //   setPhone('')
      //   setOtherDetails('')
      //   setEmailError('')
      //   errorMessage('')
      //   successMessage('')
      setFormSubmitted(true);
      // history.push('/Auth');
      // CREATE NEW USER IN DB
    }
  };

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  //handle the input change for the new user's information
  const handleNewUserChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // setSubmitted(false);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="signup-success"
        style={{ display: submitted ? '' : 'none' }}>
        <h1> {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div className="signup-error" style={{ display: error ? '' : 'none' }}>
        <h1>Fill all fields</h1>
      </div>
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add the new user to the validUsers array
    setUsers([...users, newUser]);
    // Clear the new user's information
    // setNewUser({username: "", password: "", name: ""});
    // validate form data here

    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <RegistrationConfirmation
        name={name}
        username={username}
        email={email}
        phone={phone}
        otherDetails={otherDetails}
      />
    );
  }

  return (
    <div className="form">
      <div className="gdcs">
        <h1>UCU GDCS Member Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form className="form">
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />

        <label className="label">User Name</label>
        <input
          onChange={handleUserName}
          className="input"
          value={username}
          type="text"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">Phone: </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <label className="label">Confirm Password</label>
        <input
          onChange={handleConfirmPassword}
          className="input"
          value={confirmPassword}
          type="password"
        />

        <label className="label">Other Details: </label>
        <textarea
          value={otherDetails}
          onChange={(e) => setOtherDetails(e.target.value)}
          className="input"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        <Link to="/about">About</Link>
        <text className="login-instead">login instead</text>
      </form>
    </div>
  );
}
