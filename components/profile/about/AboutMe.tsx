import React from 'react'
import currentUser from '../../../store/UserStore'

const AboutMe = () => {

  return (
    <div className='flex flex-col gap-3 px-2   pb-4 w-full'>

      <h2 className='text-white text-2xl '>About Me</h2>
      
      {
        currentUser.bio ? (
          <span className='text-text font-semibold'>{currentUser.bio}</span>

        ) : <span className='text-text text-lg font-semibold '>Bio in not defined</span>
      }
      
    </div>
  )
}

export default AboutMe
