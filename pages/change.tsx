import React from 'react'
import Layout from '../components/Layout'
import ProfileHeader from '../components/profile/profileHeader/ProfileHeader'

import currentUser from '../store/UserStore'
import Tabs from '../components/profile/Tabs'

import ChageProfileForm from '../components/chageProfiel/ChageProfileForm'

import { observer } from 'mobx-react-lite'

import ChageProfileSidebar from '../components/chageProfiel/ChageProfileSidebar'

const ChageProfile = () => {

  return (
    <Layout title={ currentUser.username +  ' | Change'} noRightbar>

      <div className='p-[24px] flex flex-col'>
          <ProfileHeader />

          <Tabs />

          <div className='flex'>

            <ChageProfileSidebar />

            <div className='flex flex-col w-full'>

              <div className='pb-4 mb-7 border-b border-gray-500 border-opacity-50'>
                <h1 className='text-3xl text-white'>Редактировать вашу учётную запись</h1>

              </div>

              <h1 className='text-text text-2xl'>Общедоступная информация</h1>

              <ChageProfileForm />

            </div>

          </div>

      </div>
      
    </Layout>
  )
}

export default observer(ChageProfile)
