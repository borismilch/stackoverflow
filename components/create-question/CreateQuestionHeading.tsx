import React from 'react'

const CreateQuestionHeading: React.FC<{title: string, text: string}> = ({title, text}) => {
  return (
    <div className='flex flex-col mb-2 px-1'>

      <h1 className='text-sm text-white font-semibold'>
          {title}
      </h1>

      <span className='text-text text-xs'>
        {text}
      </span>
      

    </div>
  )
}

export default CreateQuestionHeading
