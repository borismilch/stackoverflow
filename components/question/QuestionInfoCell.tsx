import React from 'react'

const QuestionInfoCell: React.FC<{title: string, val: string}> = ({title, val}) => {
  return (
    <div className='flex flex-col items-center p-3 w-[50px] justify-center'>

      <span className='text-text leading-7'>{val}</span>

      <p className='text-xs text-text'>{title}</p>

    </div>
  )
}

export default QuestionInfoCell
