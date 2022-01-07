import React from 'react'
import DropDown from './DropDown'

const CrearwQuestionDropdown = () => {
  return (
    <div className='flex flex-col border  w-full shadow-lg border-gray-300 border-opacity-20 rounded-lg overflow-hidden '>

      <div className='p-3 border-b border-opacity-30 border-gray-300 text-text text-sm font-medium '>
         <p> Шаг 1: Создайте черновик своего вопроса</p>
      </div>

      <div className='flex flex-col bg-brown'>

      <div className='p-3 text-text text-xs  py-5 '>
        <p>
          Coобщество здесь, чтобы помочь вам с конкретными проблемами по программированию, алгоритмам, языкам программирования.
        </p>

        <br />

        <p>
          Избегайте публикации вопросов, на которые невозможно дать объективный ответ.
        </p>  
      </div>

     <div className='flex flex-col'>
  
        <DropDown val={['1.', 'Describe thw issue']} /> 

        <DropDown val={['2.', 'Describe, what do you need']}  />

        <DropDown val={['3.', 'Add some code']}  />



     </div>

     

      </div>

    </div>
  )
}

export default CrearwQuestionDropdown
