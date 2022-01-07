import React from 'react'
import { CakeIcon, ClockIcon, CalendarIcon } from '@heroicons/react/solid'

import { PencilIcon, WifiIcon } from '@heroicons/react/solid'

import { useRouter } from 'next/router'

import ProfileHeaderInfoItem from './ProfileHeaderInfoItem'

import currentUser from '../../../store/UserStore'

import Image from 'next/image'
import { observer } from 'mobx-react-lite'
import ProfileHeaderButon from './ProfileHeaderButon'

const ProfileHeader = () => {

  const router = useRouter()

  const chageProfile = () => {
    router.push('/change')
  }

  return (
    <div className='flex gap-5 items-center relative'>

      <div className='flex items-center flex-col md:flex-row flex-grow gap-4 text-center md:text-left'>

      <div className='relative w-[128px] h-[128px] overflow-hidden rounded-md'>
      { currentUser.isAuthenteficated && <Image 
          src={currentUser.picture}
          layout='fill'
        />}
      </div>

      <div className='flex flex-col gap-2 '>

        <h3 className='text-white text-4xl '>{currentUser.username}</h3>

        <div className='flex justify-center md:justify-start flex-wrap items-center gap-3 text-text '>

         <ProfileHeaderInfoItem  
             Icon={CakeIcon}
             title={'Registered in' + new Date(+currentUser.createdAt).toLocaleDateString() }  />

         <ProfileHeaderInfoItem Icon={ClockIcon} title='Last visit: yesterday' />

         <ProfileHeaderInfoItem Icon={CalendarIcon} title='Visit all the days' />

        </div>

      </div>

      </div>

 

      <div className='absolute -top-2 right-3 flex gap-4 items-center '>

        <ProfileHeaderButon Icon={PencilIcon} cb={chageProfile} title='Change Profile' />

        <ProfileHeaderButon Icon={WifiIcon} cb={chageProfile} title='Network Account' />

        
      </div>
      
    </div>
  )
}

export default observer(ProfileHeader)
