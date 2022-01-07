import React, { useState } from 'react'
import { SnowIcon, BoxIcon, HelpIcon, MenuIcon, TrohfyIcon } from '../../../assets/icons'

import { observer } from 'mobx-react-lite'
import { useAuth0 } from '@auth0/auth0-react'

import { CHECK_USER } from '../../../graphql/queries/UserQueries'
import { useMutation } from '@apollo/client'

import { useEffect } from 'react'

import currentUser from '../../../store/UserStore'
import HeaderSelect from './HeaderSelect'

const Headerctions = () => {

  const [select, setSelect] = useState<boolean>(false)

  const [ checkUser, {data} ] = useMutation(CHECK_USER)

  const { loginWithRedirect, isAuthenticated, user } = useAuth0()

  const login = async () => {
    await loginWithRedirect()
  }

  const setMenu = (val: boolean) => {
    setSelect(val) 
  }


  const setUser = async () => {
    const userData = await checkUser({ variables: { 
      user: { email: user.email, username: user.nickname ? user.nickname : user.username,  picture: user.picture, bio: user.bio ? user.bio : '',
    } } })

    currentUser.setUser(userData.data.checkUser)
    console.log(userData.data.checkUser)
  }

  useEffect (() => {
    if (isAuthenticated) {

      setUser()

    } else {
      currentUser.cleanUser()
    }
  }, [isAuthenticated])

  return (
    <div className='flex items-center'>

      <div className='header_icon mr-2'>

       { currentUser.isAuthenteficated ? 
        ( <img
          onClick={setMenu.bind(null, !select)}
          src={currentUser.picture}
          alt="kk"
          className='h-[27px] w-[27px]   rounded-md object-cover'
        />) : <p onClick={login.bind(null)} className='small_text'>Login</p>
      }

      </div>

      { select && <div className='absolute top-12   ' onClick={setMenu.bind(null, false)}> <HeaderSelect /></div> }

      <div className='header_icon '>
          <BoxIcon />
      </div>

      <div className='hidden md:flex items-center gap-3'>

      <div className='header_icon '>
          <HelpIcon />
      </div>

      <div className='header_icon '>
          <TrohfyIcon />
      </div>

      <div className='header_icon '>
          <MenuIcon />
      </div>

      <div className='header_icon '>
          <SnowIcon />
      </div>

      </div>

    

      
    </div>
  )
}

export default observer(Headerctions)
