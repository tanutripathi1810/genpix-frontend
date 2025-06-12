import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
const Desciption = () => {
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}  
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    
    
    
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your Imagination into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} className='w-80 xl:w-96 rounded-lg' alt="" />
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducting the AI-Powered Text to Image Generator</h2>
          <p className='text-gray-600 mb-4'>Easily bring your ideas to life with out free AI Image generator ,Whether you need stunning visuals or unique imagery, out tool transforms your text into eye-catching images with just a few clicks, Imagine it,descibe it, and watch it come to life instantly.</p>
          <p className='text-gray-600'>Our AI-powered image generator is designed to make creating stunning visuals effortless. Simply enter a description of the image you envision, and our advanced algorithms will generate a high-quality image that matches your description. Whether you're a designer, marketer, or just looking to create unique content, our tool is here to help.</p>
        </div>
      </div>
    </motion.div>

  )
}

export default Desciption
