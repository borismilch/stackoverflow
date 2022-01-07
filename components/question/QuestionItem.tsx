import React from 'react'
import { IQuetion } from '../../models/types'

import datejs from '../../lib/dayjs'

import QuestionInfoCell from './QuestionInfoCell'
import { useRouter } from 'next/router'

const QuestionItem: React.FC<{question: IQuetion}> = ({question}) => {

  const router = useRouter()

  const pushRouter = () => {
    router.push('/question/' + question.id)
  }

  return (
    <div className='quest_item'>

      <div className='flex gap-2 items-center '>

        <QuestionInfoCell title='votes' val={question.vote.length} />

        <QuestionInfoCell title='answears' val={question.comments.length.toString()} />

        <QuestionInfoCell title='views' val={question.watched.toString()} />

      </div>

      <div className='flex flex-col gap-1 w-full pr-5'>
        
        <h2
          onClick={pushRouter.bind(null)}
          className=' text-[#33a7ff] hover:underline cursor-pointer'>
          {question.title}
        </h2>

        <div className='flex w-full justify-between items-center '>

          <div className='flex gap-2 items-center flex-grow'>

              {
                question.tags.split(' ').map(item => (
                  <div key={item} className='bg-[#3d4951] rounded-md p-1  text-blue-300 text-xs'>
                    {item}
                  </div>
                ))
              }
          </div>

          <span className='text-text cursor-pointer transition-all duration-200 text-xs '>
            question asked { datejs().to(new Date(+question.createdAt)) } by <span className='text-blue-400 hover:text-blue-500 hover:underline'>{question.creator.username}</span> 
          </span>

        </div>

      </div>
      
    </div>
  )
}

export default QuestionItem
