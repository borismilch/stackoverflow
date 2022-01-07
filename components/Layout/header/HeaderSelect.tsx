import React from 'react'

import { UserIcon, LogoutIcon } from '@heroicons/react/outline'
import { useAuth0 } from '@auth0/auth0-react'

import { useRouter } from 'next/router' 

const HeaderSelect = () => {

  const router = useRouter()
  const { logout } = useAuth0() 

  const logoutUser = async ()  => {
    await logout()
  }

  const pushRouter = () => {
    router.push('/profile')
  }

  return (
    <div className='flex w-[140px] flex-col rounded-lg overflow-hidden bg-brown border-gray-300 border-opacity-25'>

    <div
      onClick={pushRouter.bind(null)}
      className='selectItem hover:bg-opacity-10'>

      <UserIcon className='h-4' />

      <p>Profile</p>

    </div>

      
    <div
      onClick={logoutUser.bind(null)}
     className='selectItem hover:bg-opacity-10'>

      <LogoutIcon className='h-4' />

      <p>LogOut</p>

    </div>
      
    </div>
  )
}

export default HeaderSelect
