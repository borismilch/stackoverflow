import React from 'react'
import SidebarItem from './SidebarItem'
import { SparklesIcon } from '@heroicons/react/solid'

import { GlobeIcon } from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <>
  
    <div className='hidden md:flex flex-col  py-4  items-end border-r h-screen sticky top-[47px] border-gray-600 '>

     <SidebarItem title='Home' path='/' />

      <h4 className='w-[150px] text-[#fff] opacity-50 text-xs pt-3'>PUBLIC</h4>

      <SidebarItem title='Questions' path='/questions' Icon={GlobeIcon} />

      <SidebarItem title='Task' path='/questions' width={140} />

      <SidebarItem title='Users' path='/questions'width={140}  />

      <h4 className='w-[150px] text-[#fff] opacity-50 text-xs pt-3'>COLLECTIVES</h4>

      <SidebarItem title='Collectives' width={140} Icon={SparklesIcon} path='/questions' />

      
      <h4 className='w-[150px] text-[#fff] opacity-50 text-xs pt-3'>FIND A JOB</h4>

      <SidebarItem title='Jobs' path='/questions' width={140} />
 
      <SidebarItem title='Companies' path='/questions'width={140}  />

      <h4 className='w-[150px] text-[#fff] opacity-50 text-xs pt-3 pb-1'>TEAMS</h4>

      <SidebarItem title='Create new Team+' path='/questions'  />

    </div>

    </>
  )
}

export default Sidebar
