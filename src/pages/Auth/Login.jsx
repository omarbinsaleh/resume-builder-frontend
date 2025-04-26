import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Login = ({setCurrentPage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  // Handle the Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

  }

  return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Welcome Back</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please enter your details to login</p>

      <form onSubmit={handleLogin}>
        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        <button type='submit' className='btn-primary'>
          LOGIN
        </button>

        <p className='text-[13px] text-slate-800 mt-3'>
          Don't have account? {' '}
          <button className='font-semibold hover:underline cursor-pointer ml-1' onClick={() => {
            setCurrentPage('signUp')
          }}>
            Sign Up
          </button>
        </p>
      </form>
    </div>
  )
}

export default Login
