import React from 'react'
import currentUser from '../../../store/UserStore'

const StatsBar = () => {

  return (
    
    <div className='flex flex-col w-full gap-3'>

      <h1 className='text-lg text-text'>Статистика</h1>

      <div className='grid grid-cols-2 p-4 border gap-5 text-sm w-full border-gray-500 rounded-md'>

        <div className='flex flex-col items-center justify-center'>

          <span className='text-white'>{currentUser.reputation}</span>

          <p className='text-text text-sm '>Reputation</p>

        </div>

        <div className='flex flex-col items-center justify-center'>

          <span className='text-white'>{currentUser.reputation}</span>

          <p className='text-text text-sm '>Answears</p>

        </div>

        <div className='flex flex-col items-center justify-center'>

          <span className='text-white'>{currentUser.reputation}</span>

          <p className='text-text text-sm '>Questions</p>

        </div>

        <div className='flex flex-col items-center justify-center'>

          <span className='text-white'>{currentUser.reputation}</span>

          <p className='text-text text-sm '>Comments</p>

        </div>

      </div>
      
    </div>
  )
}

export default StatsBar
