import React from 'react'
import { IFooterItem } from '../../../models/types'

const FooterCell: React.FC<{col: IFooterItem}> = ({col}) => {
  return (
    <div className='flex flex-col text-text gap-4'>

    <h1 className='text-sm   text-white'>{col.title}</h1>

     <div className='flex flex-col gap-2'>

       {
         col.items.map(item => (
           <p key={item} className='text-text opacity-50 hover:opacity-100 transition-all duration-200 cursor-pointer hover:underline  text-xs  font-semibold'>{item}</p>
         ))
       }

     </div>
      
    </div>
  )
}

export default FooterCell
