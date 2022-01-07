import React from 'react'
import { useRouter } from 'next/router'

const CommentPlaceholder: React.FC<{marks: string[]}> = ({marks}) => {

  const router = useRouter()

  const pushRouter = () => {
    router.push('/create-question')
  }

  return (
    <div className='pt-4'>

      <p className='font-medium text-white'>
        Всё ещё ищете ответ? Посмотрите другие вопросы с метками
        &nbsp;
        
        {
          marks.map(m => (
             <span key={m} className='marker inline'>{m}</span>
          ))
        }
        &nbsp;
       или 
        &nbsp;
        
       <span 
          onClick={pushRouter.bind(null)}
          className='text-blue-400 hover:text-blue-500 transition-all duration-200 cursor-pointer'>
            задайте свой вопрос
        </span>.

      </p>
      
    </div>
  )
}

export default CommentPlaceholder
