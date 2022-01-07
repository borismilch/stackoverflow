import React from 'react'

const ProfileHeaderButon: React.FC<{cb: Function, Icon: any, title: string}> = ({cb, Icon, title}) => {
  return (
    <button
      onClick={cb.bind(null)}
       className='profileHeaderButton text-text text-xs font-semibold border border-gray-200 border-opacity-30'>

      <Icon className='h-5' />

      <p>{title}</p>
      
    </button>
  )
}

export default ProfileHeaderButon
