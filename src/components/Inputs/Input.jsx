import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Input = ({ value, onChange, label, placeholder, type, errorMessage }) => {
   const [showPassword, setShowPassword] = useState(false);

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   }

   return (
      <div>
         <label className='text-[13px] text-slate-800'>{label}</label>
         <div className='input-box'>
            <input
               className='w-full bg-transparent outline-none'
               type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
               placeholder={placeholder}
               value={value}
               onChange={(e) => onChange(e)}
            />

            {type === 'password' && (
               <>
                  {showPassword ? (
                     <FaRegEye size={22} className='text-primary cursor-pointer' onClick={() => toggleShowPassword()} />
                  ) : (
                     <FaRegEyeSlash size={22} className='text-slate-400 cursor-pointer' onClick={() => toggleShowPassword()} />
                  )}
               </>
            )}
         </div>
         {errorMessage && <p className='text-red-500 text-xs pb-2.5'>{errorMessage}</p>}

      </div>
   )
}

export default Input
