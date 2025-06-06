import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import Input from '../../components/Inputs/Input';
import toast from 'react-hot-toast';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATH } from '../../utils/apiPath';
import { UserContext } from '../../context/userContext';

const Login = ({setCurrentPage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();
  const {updateUser, user, loading} = useContext(UserContext)

  // Handle the Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    // validate email
    if (!email) {
      setPasswordError('');
      setEmailError("Please Enter your email");
      return;
    };
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setPasswordError('');
      setEmailError("Please, Enter a valid email address");
      return;
    };

    // validate password
    if(!password) {
      setEmailError('')
      setPasswordError("Please enter the password");
      return;
    };

    setEmailError('');
    setPasswordError('');

    // call the login api
    try {
      console.log({email, password});
      const response = await axiosInstance.post(API_PATH.AUTH.LOGIN, { email, password })
      console.log(response)

      const token = response.data.user.token;
      const user = response.data.user;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        toast.success("User logged in successfully")
        setEmail('');
        setPassword('');
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Welcome Back</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please enter your details to login</p>

      <form onSubmit={handleLogin}>
        <Input value={email} type='text' placeholder='omarbinsaleh@gmail.com' onChange={({target}) => setEmail(target.value)} label='Enter Email' errorMessage={emailError} />
        <Input value={password} type='password' placeholder='Minimum 6 characters' onChange={({target}) => setPassword(target.value)} label='Enter Password' errorMessage={passwordError} />

        {/* {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>} */}
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
