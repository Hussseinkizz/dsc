import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/hi';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  email: z.string().email('Invalid email').nonempty('Email is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .nonempty('Password is required'),
});

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSignin = (data) => {
    console.log('signing in....', data);
  };

  return (
    <main className="w-full flex flex-col items-center justify-center px-4 p-[clamp(8vh,12vh,6vh)]">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <Link to="/" className="flex gap-2 justify-center items-center">
            <Icons.HiAcademicCap className="w-6 h-6" />
            <span className="flex font-bold">DSC UCU Community</span>
          </Link>
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Welcome Back!
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleSignin)} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              {...register('email')}
              className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="font-medium">Password</label>
            <div className="flex relative">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                {...register('password')}
                className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <div className="flex absolute right-2 top-5 pl-4">
                {isPasswordVisible ? (
                  <Icons.HiEye
                    className="h-5 w-5 text-slate-400 transition ease-linear"
                    onClick={() => setIsPasswordVisible(false)}
                  />
                ) : (
                  <Icons.HiEyeOff
                    className="h-5 w-5 text-slate-400 transition ease-linear"
                    onClick={() => setIsPasswordVisible(true)}
                  />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 mt-2">{errors.password.message}</p>
            )}
          </div>
          <button
            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 active:scale-95 transition ease-linear rounded-lg duration-150"
            type="submit">
            Sign in
          </button>
          <div className="w-full flex flex-col justify-between items-center gap-4 text-center">
            <p className="flex gap-2">
              Don't have an account?
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </Link>
            </p>
            <Link to="/forget-password" className="hover:text-indigo-600">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
