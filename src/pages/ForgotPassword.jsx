import React from 'react';
import EmailSvg from '../assets/art/email-svg';

const ForgotPassword = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen h-full items-center w-full">
      <div className="flex flex-col w-1/4 items-center justify-center mx-auto shadow-md rounded-lg p-4 bg-slate-100">
        <EmailSvg />
        <h1 className="text-center">
          An Email Is On It's Way For You To Reset Your Password!
        </h1>
      </div>
    </section>
  );
};

export default ForgotPassword;
