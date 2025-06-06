import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { validateEmail } from '../../utils/helper';
import Input from '../../components/Inputs/Input';
import toast from 'react-hot-toast';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

const SignUp = ({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [profilePicError, setProfilePicError] = useState(null);
  const [fullNameError, setFullNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // validate the full name
    if (!fullName) {
      setFullNameError('Please enter your full name');
      return;
    };

    // validate the email address
    if(!email) {
      setFullNameError('');
      setEmailError("Please enter the email");
      return;
    };

    if(!validateEmail(email)) {
      setFullNameError('');
      setEmailError("Enter a valid email address");
      return;
    };

    // validate the password
    if (!password) {
      setFullNameError('');
      setEmailError('');
      setPasswordError("Please enter password");
      return;
    };

    // reset all the error messages
    setProfilePicError('');
    setFullNameError('');
    setEmailError('');
    setPasswordError('');

    // make the sign up API call
    try {
      setFullName('');
      setEmail('');
      setPassword('');
      toast.success("Your account has been created successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Create an Account</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>
        Join us by providing your details below.
      </p>

      <form onSubmit={handleSignUp}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        <div>
          <Input value={fullName} onChange={({target}) => setFullName(target.value)} label={'Full Name'} placeholder='Omar Bin Saleh' type='text' errorMessage={fullNameError} />
          <Input value={email} onChange={({target}) => setEmail(target.value)} label='Email Address' placeholder='omarbinsaleh@gmail.com' type='text' errorMessage={emailError} />
          <Input value={password} onChange={({target}) => setPassword(target.value)} label='Enter Password' placeholder='Minimum 6 characters' type='password' errorMessage={passwordError} />
        </div>

        <button type='submit' className='btn-primary'>
          SIGN UP
        </button>

        <p className='text-[13px] text-slate-800 mt-3'>
          Already have an account? {' '}
          <button className='font-semibold hover:underline cursor-pointer ml-1' onClick={() => {
            setCurrentPage('login')
          }}>
            Login
          </button>
        </p>
      </form>
    </div>
  )
}

export default SignUp
