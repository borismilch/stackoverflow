import React, { ChangeEvent } from 'react'
import ChangeProfileInput from '../chageProfiel/ChangeProfileInput'
import CreateQuestionHeading from './CreateQuestionHeading'

import { useState } from 'react'
import { IFormQuestionInstance } from '../../models/types'

import currentUser from '../../store/UserStore'
import { useRouter } from 'next/router'

import RichTextEditor from '../forms/RichTextEditor'

import { useMutation } from '@apollo/client'
import ImageLoader from '../loaders/ImageLoader'

import {GET_ALL_QQUESTIONS, CREATE_QUESTION} from '../../graphql/queries/indexQuery'
import { observer } from 'mobx-react-lite'

const CreateQuestionForm = () => {

  const router = useRouter()

  const [createQuestion] = useMutation(CREATE_QUESTION)
  const [loading, setLoaidng] = useState<boolean>(false)

  const [form, setForm] = useState<IFormQuestionInstance>({
    body: '',
    title: '',
    tags: ''

  }) 

  const pushRouter = (id: string) => {
    router.push('/question/' + id)
  } 

  const createNewQuestion = async () => {

    setLoaidng(true)
    const cretedQuestion = await createQuestion({ variables: {
      question: {...form, creatorId: currentUser.id}
    } })

    setLoaidng(false)

    console.log(cretedQuestion)
    pushRouter(cretedQuestion.data.createQuestion.id)

  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
    console.log(form)
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const setBody = (body: string) => {
    setForm(prev => ({...prev, body}))
  }

  return (
    <>
    <div className='flex flex-col bg-brown p-5 rounded-lg shadow-md flex-[0.7]'>

      <CreateQuestionHeading 
        title='Заголовок' 
          text='Будьте конкретны. Представьте, что вы задаёте вопрос другому человеку.'
      />

      <ChangeProfileInput
        name='title' 
        noLabel
        value={form.title} 
        onchange={changeHandler}  
      />

      <CreateQuestionHeading 
         title='Основная часть' 
         text='Добавьте всю информацию, которая может понадобиться для ответа на ваш вопрос'
      />

      <div className='flex flex-col my-4'>
      <RichTextEditor cb={setBody} />
      </div>

      <CreateQuestionHeading 
        title='Метки' 
        text='Добавьте не более 5 меток, описывающих о чём ваш вопрос'
      />

      <ChangeProfileInput
        name='tags' 
        value={form.tags} 
        noLabel
        onchange={changeHandler}  
      />

    </div>

    <div className='flex gap-3 items-center p-5 max-w-md'>

      <button 
        disabled={loading}
        onClick={createNewQuestion.bind(null)}
        className='blue_button flex justify-center disabled:hover:opacity-50 gap-2 disabled:opacity-50 disabled:cursor-not-allowed' >

       <p> Check question</p>
       
      { loading && <ImageLoader />}

      </button>

      <button className='blue_button bg-red-400 bg-opacity-10 hover:bg-opacity-40 hover:bg-red-500 text-red-600'>Cancel submition</button>
     </div>

    </>


  )
}

export default observer(CreateQuestionForm)
