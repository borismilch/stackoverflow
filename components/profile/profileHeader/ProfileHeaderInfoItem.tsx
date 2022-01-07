import React from 'react'

const ProfileHeaderInfoItem: React.FC<{Icon: any, title: string}> = ({Icon ,title}) => {
  return (
    <div className='flex items-center group gap-2 cursor-pointer'>

      <Icon className='h-5 group-hover:text-white' />

      <p className='text-sm group-hover:text-white'>{title}</p>

    </div>
  )
}

export default ProfileHeaderInfoItem
