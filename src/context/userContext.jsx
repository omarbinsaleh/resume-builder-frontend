import { API_PATH, BASE_URL } from "../utils/apiPath";
import axiosInstance from "../utils/axiosInstance";

import { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (user) return;
      
      const accessToken = localStorage.getItem('token');
      if(!accessToken) {
         setLoading(false);
         return
      };

      const fetchUser = async () => {
         try {
            const apiUrl = API_PATH.AUTH.GET_PROFILE;
            const response = await axiosInstance.get(apiUrl);
            setUser(response.data.user);
         } catch (error) {
            console.error("User not authenticated", error);
            clearUser();
         } finally {
            setLoading(false);
         };
      };

      fetchUser();

   }, [])

   const updateUser = (userData) => {
      setUser(userData);
      localStorage.setItem('token', userData.token);
      setLoading(false);
   };

   const clearUser = () => {
      setUser(null);
      localStorage.removeItem('token');
   }

   const userInfo = {
      user,
      loading,
      clearUser,
      updateUser
   }

   return <UserContext.Provider value={userInfo} >
      {children}
   </UserContext.Provider>
};

export default UserProvider;