import React from 'react';

function RegistrationConfirmation(props) {
  const { name, email, phone, otherDetails } = props;

  return (
    <div className="confirmation">
      <h2>Thank you for registering!</h2>
      <p>Here's a summary of the information you provided:</p>
      <ul>
        <li>Name:  {name}</li>
        <li>Email:  {email}</li>
        <li>Phone:  {phone}</li>
        <li>Other Details:  {otherDetails}</li>
      </ul>
      <p>We look forward to seeing you at our events!</p>
    </div>
  );
}

export default RegistrationConfirmation;