import React from 'react'
import Image from 'next/image'

const Greet = () => {
  return (
    <div className='flex flex-grow h-[120px] justify-between  overflow-hidden items-center w-full pr-3'>

      <h1 className='text-[26px] pl-3 opacity-90 text-white'>
      Задать публичный вопрос   </h1>

      <div className='relative h-full w-[570px]'>

        <Image
          src={'https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368'}
          layout='fill'
          objectFit='cover'
        />
          
      </div>

    

    </div>
  )
}

export default Greet
