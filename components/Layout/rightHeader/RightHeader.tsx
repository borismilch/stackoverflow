import React from 'react'
import OverflowBlog from './blog/OverflowBlog'

import RingtHeaderFilter from './RingtHeaderFilter'

const RightHeader = () => {
  return (
    <div className=' hidden lg:flex flex-col gap-5  pt-6 pr-6 w-full max-w-[328px]'>

      <OverflowBlog />

      <RingtHeaderFilter title='Custom Filters' content={( <p className='small_text'>Create Custom Filter</p> )} />


      <RingtHeaderFilter title='Custom Filters' content={( <p className='small_text'>Create Custom Filter</p> )} />
      

      <RingtHeaderFilter title='Custom Filters' content={( <p className='small_text'>Create Custom Filter</p> )} />
      
      
    </div>
  )
}

export default RightHeader
