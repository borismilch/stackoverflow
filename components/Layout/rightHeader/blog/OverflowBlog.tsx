import React from 'react'
import BlogTitle from './BlogTitle'

import BlogItem from './BlogItem'

import { PencilIcon, ChatIcon } from '@heroicons/react/solid'

const NumberItem = () => (
  <p className='text-text opacity-80 font-semibold '>32</p>
)

const OverflowBlog = () => {
  return (
    <div className='flex flex-col rounded-md overflow-hidden border-yellow w-full max-w-[300px]'>

      <BlogTitle title='The Overflow Blog' />

      <BlogItem title='Favor real dependencies for unit testing' Icon={PencilIcon} /> 

      <BlogItem title='Podcast 403: Professional ethics and phantom braking' Icon={PencilIcon} />

      
      <BlogTitle title='Featured on Meta' />

      <BlogItem title='Providing a JavaScript API for userscripts' Icon={ChatIcon} /> 

      <BlogItem title='Congratulations to the 59 sites that just left Beta' Icon={ChatIcon} />

      
      <BlogTitle title='The Overflow Blog' />

      <BlogItem title='This tag [got] me confused'  /> 

      <BlogItem Icon={NumberItem} title='Can we please unlist [tolist]?g' />

      <BlogItem  Icon={NumberItem} title='How can the ask question page be improved in the case the validation checks...'  /> 

      <BlogItem  Icon={NumberItem} title='Should we edit a question to transcribe code from an image to text?' />
      
    </div>
  )
}

export default OverflowBlog
