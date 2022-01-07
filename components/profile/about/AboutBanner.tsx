import React from 'react'

import Servercon from '../../../assets/icons/Servercon'

const AboutBanner = () => {
  return (
    <div className='flex flex-col items-center justify-center p-[48px] rounded-md bg-[#393939] text-center'>

      <Servercon />

      <p className='text-sm text-gray-400'>
        Впервые здесь? Попробуйте ответить на вопрос!
      </p>

      <span className='text-sm text-text max-w-lg'>
        Your most helpful questions, answers and tags will appear here. Start by answering a <p className='text-blue-500 inline'>question </p> or 
        <p className='text-blue-500 inline'> selecting tag</p> s that match topics you’re interested in.
      </span>
      
    </div>
  )
}

export default AboutBanner
