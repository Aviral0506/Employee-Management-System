import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  };

  return (
    <div className='flex w-screen min-h-screen justify-center items-center bg-black'>
      <div className='border border-emerald-600 rounded-xl p-6 w-[320px] bg-black shadow-md h-80'>
        <h2 className='font-bold text-xl text-emerald-600 text-center mb-4'>Aspire X</h2>
        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'>
          
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Enter Your Email'
            className='w-full rounded-lg bg-transparent text-white font-semibold outline-none border border-emerald-600 mb-4 px-3 py-2'
          />

          <div className='w-full relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Enter Your Password'
              className='w-full rounded-lg bg-transparent text-white font-semibold outline-none border border-emerald-600 mb-4 px-3 py-2 pr-10'
            />
            <span
              className='absolute right-3 top-2 cursor-pointer text-sm text-emerald-600'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <button
            type='submit'
            disabled={!email || !password}
            className='w-full text-white bg-emerald-600 px-4 py-2 rounded-xl hover:bg-emerald-700 disabled:opacity-50'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
