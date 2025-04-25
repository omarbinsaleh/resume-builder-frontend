import {createBrowserRouter} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import Dashboard from '../pages/Home/Dashboard';
import EditResume from '../pages/ResumeUpdate/EditResume';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <LandingPage />
   },
   {
      path: '/login',
      element: <Login />
   },
   {
      path: '/signUp',
      element: <SignUp />
   },
   {
      path: '/dashboard',
      element: <Dashboard />
   },
   {
      path: '/resume/:resumeId',
      element: <EditResume />
   }
])