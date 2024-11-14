import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className=''>
      <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[360px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state === 'Signup' ? 'Create Account' : 'Login'}</p>
          <p>Please {state === 'Signup' ? 'Signup' : 'Login'} to book an appointment</p>
          {state === 'Signup' && (
            <div className='w-full'>
              <p>Full Name</p>
              <input
                className='border border-zinc-300 rounded w-full p-2 mt-1'
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )}
          <div className='w-full'>
            <p>Email</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button className='bg-primary text-white w-full py-2 rounded-md text-base' type='submit'>
            {state === 'Signup' ? 'Create Account' : 'Login'}
          </button>

          <div className='w-full text-center mt-4'>
            {state === 'Signup' ? (
              <p>
                Already have an account?{' '}
                <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>
                  Login here
                </span>
              </p>
            ) : (
              <p>
                Create a new account?{' '}
                <span onClick={() => setState('Signup')} className='text-primary underline cursor-pointer'>
                  Click here
                </span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
