import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import Spinner from '../../components/Spinner/Spinner';

const Dashboard = () => {
  const {user, loading} = useContext(UserContext);

  if (loading) return <Spinner />

  console.log(user);
  return (
    <div>
      Dashboard page
    </div>
  )
}

export default Dashboard
