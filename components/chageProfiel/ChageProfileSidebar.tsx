import React from 'react'

const ChageProfileSidebar = () => {
  return (
    <div className='w-[33%] mr-[20px] flex flex-col'>

      <div>
        <h3 className='font-bold text-text text-sm  py-2'>ЛИЧНАЯ ИНФОРМАЦИЯ</h3>       
      </div>

      <button className='tabs_button text-xs text-left w-full tabs_button  tabs_button_active px-5 text-left_active'>Редактировать профиль</button>

      <div>
          <h3 className='font-bold text-text text-sm  py-2'>НАСТРОЙКИ ПОДПИСКИ</h3>       
      </div>

      <div className='flex flex-col'>

        <button className='tabs_button text-xs text-left'>Изменить настройки подписки</button>

        <button className='tabs_button text-xs text-left'>Отслеживание и игнорирование меток </button>

        <button className='tabs_button text-xs text-left'>Дайджесты сообщества </button>

        <button className='tabs_button text-xs text-left'>Подписки на вопросы</button>

        <div>
          <h3 className='font-bold text py-2 text-text text-sm '>НАСТРОЙКИ САЙТА</h3>       
       </div>

        <button className='tabs_button text-xs text-left'>Предпочтения</button>

        <button className='tabs_button text-xs text-left'>Визитка</button>

        <button className='tabs_button text-xs text-left'>Приложения</button>

        <button className='tabs_button text-xs text-left'>Способы входа</button>

        <button className='tabs_button text-xs text-left'>Скрыть cообщества</button>

        <button className='tabs_button text-xs text-left'>Удалить профиль</button>

      </div>

     
      
    </div>
  )
}

export default ChageProfileSidebar
