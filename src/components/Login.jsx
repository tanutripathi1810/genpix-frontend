import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext.jsx'
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Login')
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token) // Fixed: setItem instead of getItem
          setShowLogin(false)
          toast.success('Login successful!')
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token) // Fixed: setItem instead of getItem
          setShowLogin(false)
          toast.success('Account created successfully!')
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      console.error('Login/Register error:', error)
      // Fixed: use error.response.data.message if available, otherwise use error.message
      const errorMessage = error.response?.data?.message || error.message || 'An error occurred'
      toast.error(errorMessage)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form 
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative bg-white p-10 rounded-xl text-slate-500'
      >
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>

        {state !== 'Login' && (
          <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.profile_icon} width={20} alt="" />
            <input 
              onChange={e => setName(e.target.value)} 
              value={name} 
              className='outline-none text-sm' 
              type="text" 
              placeholder='Full Name' 
              required 
            />   
          </div>
        )}

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.email_icon} width={20} alt="" />
          <input 
            onChange={e => setEmail(e.target.value)} 
            value={email} 
            className='outline-none text-sm' 
            type="email" 
            placeholder='Email id' 
            required 
          />
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.lock_icon} width={16} alt="" />
          <input 
            onChange={e => setPassword(e.target.value)} 
            value={password} 
            className='outline-none text-sm' 
            type="password" 
            placeholder='Password' 
            required 
          />
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>
        
        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {state === 'Login' ? (
          <p className='mt-5 text-center'>
            Don't have an account? 
            <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>
              Sign up
            </span>
          </p>
        ) : (
          <p className='mt-5 text-center'>
            Already have an account? 
            <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>
              Login
            </span>
          </p>
        )}

        <img 
          onClick={() => setShowLogin(false)} 
          src={assets.cross_icon} 
          alt="" 
          className='absolute top-5 right-5 cursor-pointer' 
        />
      </motion.form>
    </div>
  )
}

export default Login