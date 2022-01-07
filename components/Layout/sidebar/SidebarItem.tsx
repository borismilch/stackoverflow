import React from 'react'
import { useRouter } from 'next/router'

const SidebarItem: React.FC<{title: string, path: string, Icon?: any, width?: number }> = ({title, path, Icon, width}) => {

  const router = useRouter()

  const pushRouter = () => {
    router.push(path)
  }

  return (
    <div
      onClick={pushRouter.bind(null)}  
      className={'sidebar_item ' + (router.pathname === path && 'bg-hover-color bg-opacity-10 flex items-center gap-2 text-white border-primary transform translate-x-[2px]')} style={{width: width ? width : '160px'}}
    >
  
      {Icon && <Icon className={ 'h-4 w-4  mt-[3px] mr-1 ' + (router.pathname === path && 'text-white') } /> }
    
      <p className='font-semibold text-sm'>{title}</p>
    
    </div>
  )
}

export default SidebarItem
