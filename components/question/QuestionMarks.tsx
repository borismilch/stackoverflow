import React from 'react'
import { IQuetion } from '../../models/types'

import dayjs from '../../lib/dayjs'

const QuestionMarks: React.FC<{question: IQuetion}> = ({question}) => {
  return (
   
    <div className='flex gap-2 items-center'>

    <span className='flex items-center  gap-2  text-xs'>
      <p className='text-text opacity-80'>Question Asked: </p>

      <p className='text-white'>{dayjs().to(new Date(+question.createdAt))}</p>
    </span>

    <span className='flex items-center gap-2 text-xs'>
      <p className='text-text opacity-80'>Last Activity: </p>

      <p className='text-white'>Today</p>
    </span>

    <span className='flex items-center gap-2 text-xs'>
      <p className='text-text opacity-80'>Watched: </p>

      <p className='text-white'>{question.watched} times</p>
    </span>




  </div>
  )
}

export default QuestionMarks
