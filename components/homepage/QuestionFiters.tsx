import React from 'react'
import { useRouter } from 'next/router'

const QuestionFiters: React.FC<{title: string, items: string[], row?: boolean}> = ({title, items, row}) => {

  const router = useRouter()

  const pushRouter = () => {
    router.push('/create-question')
  }

  return (
    <div className='flex flex-col w-full'>

      <div className={'flex items-center justify-between ' + (!row && 'p-5')}>

        <h1 className='text-[28px] text-white flex-grow'>{title}</h1>

       { !row ?  <button
          onClick={pushRouter.bind(null)}
          className='blue_button rounded text-2xl-sm max-w-[100px] text-text '
        >
          Ask question
        </button> : (
          <div className='flex items-center'>

          <button className='group_button rounded-l-md '>{items[0]}</button>

          { row && (
            items.slice(1, items.length - 1).map(iter => (
              <button key={iter} className='group_button'>{iter}</button>
            ))
          )}

          <button className='group_button rounded-r-md '>{items[items.length - 1]}</button>


        </div>
        )
       }

      </div>

      <div className='flex flex-grow items-center pb-4 border-b p-5 pt-0 border-gray-300 border-opacity-25 justify-end'>

      { !row && <div className='flex items-center'>

          <button className='group_button rounded-l-md '>{items[0]}</button>

          { !row && (
            items.slice(1, items.length - 1).map(iter => (
              <button key={iter} className='group_button'>{iter}</button>
            ))
          )}

          <button className='group_button rounded-r-md '>{items[items.length - 1]}</button>


        </div>}

       
      </div>
      
    </div>
  )
}

export default QuestionFiters
