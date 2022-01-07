import { ChevronDownIcon } from '@heroicons/react/outline'
import React from 'react'

const DropDown: React.FC<{val: string[]}> = ({val}) => {
  return (
  
    <div className='flex items-center py-2 w-full'>

    <div className='flex gap-2 items-center px-3 py-2 pb-0 border-t border-gray-300 border-opacity-30 flex-grow'>

      <p className='text-lg text-blue-400 font-semibold'>{val[0]}</p>

      <p className='text-text text-sm font-semibold flex-grow'>{val[1]}</p>

      <ChevronDownIcon className='h-5 text-text hover:text-white ' />

    </div>

  </div>
  )
}

export default DropDown
