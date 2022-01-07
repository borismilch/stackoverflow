import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

import QuestionMarks from '../../components/question/QuestionMarks'

import { apolloClient } from '../../lib/apollo'
import { GET_ALL_QQUESTIONS, GET_QUESTION_BY_ID } from '../../graphql/queries/QuestionsQueries'

import CommentPlaceholder from './CommentPlaceholder'

import { IQuetion } from '../../models/types'
import QuestionComment from '../../components/question/QuestionComment'

import QuestionCommentForm from './QuestionCommentForm'

import QuestionFiters from '../../components/homepage/QuestionFiters'
import { useMutation, useQuery } from '@apollo/client'
import { WATCH_QUESTION } from '../../graphql/queries/QuestionsQueries'

const Question: React.FC<{question: IQuetion}> = ({question}) => {

  const [watchQuestion] = useMutation(WATCH_QUESTION)
  const [currentQuetion, setCurrentQuestion] = useState<IQuetion>(question)

  const { data } = useQuery(GET_QUESTION_BY_ID, { variables: { questionId: question.id } })

  useEffect(() => {
    if (data) {
      console.log(question)
      setCurrentQuestion(data.getQuestion)
    }
  }, [data])

  useEffect(() => {
    watchQuestion({ variables: { questionId: question.id  }, refetchQueries: [GET_QUESTION_BY_ID, GET_ALL_QQUESTIONS] })
  }, [])

  return (  
    <Layout title='question'>
      <div className='flex flex-col p-5 '>

        <div className='flex flex-col py-2 px-2 pb-4 gap-2 border-b border-gray-500 border-opacity-30'>

          <h1 className='text-text text-3xl'>{currentQuetion.title}</h1>

          <QuestionMarks question={currentQuetion} />          
        </div>

        <div className='px-2 py-5'>
        <QuestionComment question={currentQuetion} />

        <div className='flex justify-between items-center py-4'>

          <QuestionFiters title='Answesrs' row items={['Date', 'popularity', 'raiting']}   /> 

        </div>

        <div className='flex flex-col px-4'>

          {
            currentQuetion.comments.map(comment => (
              <QuestionComment isComment question={comment} />
            ))
          }

        </div>

        <QuestionCommentForm question={currentQuetion} />

        <CommentPlaceholder marks={currentQuetion.tags.split(' ')} />

        </div>

      </div>
    </Layout>
  )
}

export default Question

export async function getServerSideProps({params}) {

  const question = await apolloClient.query<{getQuestion: IQuetion[]}>({query: GET_QUESTION_BY_ID, variables: { questionId: params.id }})

  return {
    props: {
      question: question.data.getQuestion
    }
  }
  
}