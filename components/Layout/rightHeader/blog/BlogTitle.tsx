import React from 'react'

const BlogTitle: React.FC<{title: string}> = ({title}) => {
  return (
    <div className='p-3 text-white w-full text-xs pb-4 bg-yellow font-semibold border-b border-primary border-opacity-30 '>
      <p>{title}</p>
    </div>
  )
}

export default BlogTitle
