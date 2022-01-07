
import currentUser from '../../store/UserStore'

import { observer } from 'mobx-react-lite'
import Image from 'next/image'

import { addFileToStorageAndGetUrl }  from '../../utils/addToStore'
import { useMutation } from '@apollo/client'

import { UPDATE_USER, CHECK_USER } from '../../graphql/queries/UserQueries'

import ChangeProfileInput from './ChangeProfileInput'
import { useRouter } from 'next/router'
import ImageLoader from '../loaders/ImageLoader'
 
import { IFormInstance } from '../../models/types'

import { ChangeEvent, useState, useRef } from 'react'

const ChageProfileForm = () => {

  const router = useRouter()

  const [updateUser, {data}] = useMutation(UPDATE_USER) 

  const [userLoading, setUserLoading] = useState<boolean>(false)

  const fileinputRef = useRef<HTMLInputElement>(null)

  const [loading, setLoading] = useState<boolean>(false)

  const [form, setForm] = useState<IFormInstance>({bio: currentUser.bio, location: currentUser.location, username: currentUser.username})

  const [image, setImage] = useState<string>('')
  const [imagePlaceholder, setImagePlaceholder] = useState<string>('')

  const pushRouter = () => {
    router.push('/profile')
  }

  const changeUser = async () => {

    setUserLoading(true)

    const user = {...form, picture: image? image : currentUser.picture, email: currentUser.email}

    const updatedUser = await updateUser({ variables: { user }, refetchQueries: [CHECK_USER] })

    currentUser.setUser(updatedUser.data)

    setUserLoading(false)

  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))

    console.log(data)
  }
  

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0] 
    const reader = new FileReader() 

    if (!file) { return }

    reader.readAsDataURL(file)

    reader.onload = async (event: ProgressEvent<FileReader>) => {
      setImagePlaceholder(event.target.result + '')

      setLoading(true)

      const url = await addFileToStorageAndGetUrl(event.target.result + '', '/users')

      setLoading(false)

      setImage(url)
     
    }
  }

  return (

    <div className='flex flex-col py-[24px] px-[20px]  bg-light rounded-md mt-3'>

      <div className='flex flex-col'>

        <div className='relative w-[200px] h-[200px] rounded-md overflow-hidden'>

          <input type="file" hidden onChange={fileChangeHandler} ref={fileinputRef} />

          {currentUser.isAuthenteficated && <Image
            className='transition-all duration-200 filter brightness-75 hover:brightness-90 cursor-pointer'
            layout='fill'
            src={imagePlaceholder ? imagePlaceholder : currentUser.picture}
          />}

          {
            loading && (
              <div className='inset-0 bg-black opacity-50 absolute flex justify-end p-2'>

                <ImageLoader />
              </div>

            )
          }

          { !loading && <button 
            onClick={() => fileinputRef.current.click()}
            className='fileSelectButton'
          >
            Chage Profile Image
          </button>}

        </div>

        <div className='flex flex-col mt-4'>
 
         <ChangeProfileInput value={form.username} onchange={changeHandler} name='username' />

         <ChangeProfileInput value={form.location} onchange={changeHandler} name='location' />

         <ChangeProfileInput onchange={changeHandler} value={form.bio}  name='bio' isBig />

        </div>

        <div className='flex items-center gap-5 w-full max-w-lg'>

          <button  
            disabled={userLoading}
            
            onClick={changeUser.bind(null)}
            className='blue_button flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:opacity-40'>
              
              <p>Submit Changes</p>

              { userLoading &&  <ImageLoader />}

            </button>

          <button
            onClick={pushRouter.bind(null)}
            className='blue_button bg-brown hover:bg-dark'>Cancel Changes</button>
          
        </div>
      
      </div>

    </div>
      
   
  )
}

export default observer(ChageProfileForm)
