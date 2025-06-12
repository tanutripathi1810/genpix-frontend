import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Footer = () => {
  return (
    <motion.div 
      className='flex items-center justify-between gap-4 py-3 mt-20'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={assets.logo} alt="Logo" width={150} />
      
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright @TanuTripathi 2025 | All rights reserved.
      </p>
      
      <div className='flex gap-2.5'>
        <motion.a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src={assets.facebook_icon} 
            width={35} 
            height={35}
            alt="Facebook" 
            className="object-contain"
          />
        </motion.a>
        
        <motion.a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src={assets.instagram_icon} 
            width={35} 
            height={35}
            alt="Instagram" 
            className="object-contain"
          />
        </motion.a>
        
        <motion.a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src={assets.twitter_icon} 
            width={35} 
            height={35}
            alt="Twitter" 
            className="object-contain border rounded-full border-gray-400"
          />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Footer