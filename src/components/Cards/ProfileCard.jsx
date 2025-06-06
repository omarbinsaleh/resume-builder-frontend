import React, { useContext } from 'react'
import { FaUser, FaUserAlt } from 'react-icons/fa'
import { checkValidUrl } from '../../utils/helper'
import { UserContext } from '../../context/userContext'

const ProfileCard = ({profile}) => {
  const {user, clearUser} = useContext(UserContext);
  
  console.log(profile)

  const handleLogout = (e) => {
    clearUser();
  }

  return (
    <div>
      <div className='flex items-center justify-center gap-4 rounded-full '>
        <span className='border border-slate-500 p-2 rounded-full cursor-pointer text-2xl' title="Your Profile"> 
          {checkValidUrl(profile.profileImageUrl) ? ( <img className='w-11 h-11 rounded-full' src={profile.profileImageUrl} /> ) : <FaUserAlt /> }
        </span>
        <div className='' >
          <p className='font-semibold -mb-1'>{profile.name}</p>
          <button onClick={handleLogout} className='text-sm font-semibold text-primary cursor-pointer hover:underline'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
