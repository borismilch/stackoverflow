import React from 'react'

const RingtHeaderFilter:React.FC<{title: string, content: any}> = ({title, content}) => {
  return (
    <div className='flex  border-gray-100 border border-opacity-20 flex-col '>

      <div className='text-text p-3 bg-light'>

        {title}

      </div>

      <div className='p-4 bg-brown'>

        {content}

      </div>

    </div>
  )
}

export default RingtHeaderFilter
