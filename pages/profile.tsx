import React from 'react'
import currentUser from '../store/UserStore'

import { observer } from 'mobx-react-lite'

import Layout from '../components/Layout'
import StatsBar from '../components/profile/statitic/StatsBar'
import ProfileHeader from '../components/profile/profileHeader/ProfileHeader'

import Tabs from '../components/profile/Tabs'
import AboutMe from '../components/profile/about/AboutMe'

import AboutBanner from '../components/profile/about/AboutBanner'

const profile = () => {
  return (
    <Layout noRightbar title={'Profile | ' + currentUser.username}>

      <div className='p-[24px] flex flex-col'>


        <ProfileHeader />

        <Tabs />

        <div className='flex flex-col md:flex-row gap-6'>

          <div className='flex flex-col w-full  flex-[0.23]'>
              <StatsBar />
          </div>

          <div className='flex flex-col flex-[0.74] pb-6'>

            <AboutMe />

            <h1 className='text-2xl p-4 px-2 text-text'>
                Messages
            </h1>

            <AboutBanner />

          </div>

        </div>

      </div>
    
    </Layout>
  )
}

export default observer(profile)
