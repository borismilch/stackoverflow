import React from 'react'
import RichTextEditor from '../../components/forms/RichTextEditor'

import { IQuetion } from '../../models/types'

import currentUser from '../../store/UserStore'
import { observer } from 'mobx-react-lite'
import { ICommentInput } from '../../models/types'

import { useMutation } from '@apollo/client'
import { CREATE_COMMENT } from '../../graphql/queries/CommentQueries'
import { useState } from 'react'
import { GET_QUESTION_BY_ID, GET_ALL_QQUESTIONS } from '../../graphql/queries/QuestionsQueries'

import ImageLoader from '../../components/loaders/ImageLoader' 

const QuestionCommentForm: React.FC<{question: IQuetion}> = ({question}) => {

  const [createNewComment] = useMutation(CREATE_COMMENT)
  const [comment, setComment] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const createComment = () => {

    if (!comment) return 

    setLoading(true)

    const newComment: ICommentInput = {
      body: comment ,
      creatorId: currentUser.id,
      questionId: question.id
    }

    createNewComment({variables: { commentInput: newComment }, 
      refetchQueries: [GET_QUESTION_BY_ID, GET_ALL_QQUESTIONS]})

    setComment('')

    setLoading(false)

  }

  return (
    <div className='flex flex-col gap-6 '>

      <h1 className='text-text text-lg '>
       Ваш ответ
      </h1>

      <RichTextEditor val={comment} cb={setComment} />

      <button
        onClick={createComment.bind(null)}
        disabled={loading} 
        className='blue_button w-[160px] disabled:opacity-50 flex gap-2 items-center justify-center'>

          <p> Send answear</p>

          { loading && <ImageLoader />}

        </button>
      
    </div>
  )
}

export default observer(QuestionCommentForm)
