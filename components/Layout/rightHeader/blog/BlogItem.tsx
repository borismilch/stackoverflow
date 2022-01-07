import React from 'react'

const BlogItem: React.FC<{title: string, Icon?:any}> = ({title, Icon}) => {
  return (

    <div className='px-4 py-2  text-text w-full flex items-center gap-2 text-xs bg-yellow-dark font-semibold '>

      { Icon && <Icon className={'h-4 w-4 text-text'} /> }

      <p className='line-clamp-2 transition-all duration-200 hover:text-white cursor-pointer'>{title}</p>
    </div>

  )
}

export default BlogItem
