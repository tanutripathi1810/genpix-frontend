import { createContext, useEffect } from "react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();
const AppContextProvider = (props) => {
  const [user,setUser]=useState(null);
  const [showLogin,setShowLogin]=useState(false);
  const [token,setToken]=useState(localStorage.getItem('token'))
  const [credit,setCredit]=useState(false)
  const backendUrl=import.meta.env.VITE_BACKEND_URL
  const navigate=useNavigate()
  const loadCreditsData=async()=>{
    try{
      const {data}=await axios.get(backendUrl+'/api/user/credits',{headers:{token}})
        if(data.success){
          setCredit(data.credits);
          setUser(data.user);
        }
      
    }catch(error){
      console.log(error);
      toast.error(error.message || 'Failed to load credits data');
    }
  }
  const generateImage=async(prompt)=>{
    try{
      const {data}=await axios.post(backendUrl+'/api/user/generate-image', {prompt}, {
        headers: {
          token
        }
      });
      if(data.success){
        loadCreditsData();
        return data.image
    }else{
      toast.error(data.message)
      loadCreditsData();
    }
    console.log(data);
    if(data.creditBalance===0){
        console.log('Attempting to navigate to /buy-credit'); // Debug log
        navigate('/buy-credit');
        console.log('Navigation called');

      }
    
  }catch(error){
      toast.error(error.message || 'Failed to generate image');
    }
  }
  const logout=()=>{
    localStorage.removeItem('token');
    setToken('')
    setUser(null);
  }
useEffect(()=>{
  if(token){
    loadCreditsData();
  }
},[token])

  const value={
    user,setUser,showLogin ,setShowLogin,backendUrl,token,setToken,credit,setCredit,loadCreditsData,logout,generateImage
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
} 

export default AppContextProvider;