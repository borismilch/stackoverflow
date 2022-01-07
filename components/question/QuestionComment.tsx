import React from 'react'
import { IComment, IQuetion } from '../../models/types'
import ArrowIconTop from '../loaders/ArrowIconTop'

import ArrowBottoIcon from '../loaders/ArrowBottoIcon'
import { BookmarkIcon } from '@heroicons/react/solid'

import dayjs from '../../lib/dayjs'

import { ClockIcon } from '@heroicons/react/outline'
import { useMutation } from '@apollo/client'
import currentUser from '../../store/UserStore'

import { GET_ALL_QQUESTIONS, GET_QUESTION_BY_ID } from '../../graphql/queries/QuestionsQueries'
import { VOTE_MUTATION } from '../../graphql/queries/VoteQueries'

import QuestionButtons from './QuestionButtons'
import { observer } from 'mobx-react-lite'

const QuestionComment: React.FC<{question: IQuetion | IComment, isComment?: boolean}> = ({question, isComment}) => {

  const [voteMutation] = useMutation(VOTE_MUTATION)

  const voted = question.vote?.find(item => item.creatorId === currentUser.id)

  const voteAction = () => {
    const vote = {
      questionId: question.id,
      creatorId: currentUser.id
    }

    voteMutation({variables: {voteInput: vote}, refetchQueries: [GET_ALL_QQUESTIONS, GET_QUESTION_BY_ID ]})
  }


  const voteActionTop = () => {
    if (!voted) {
      voteAction()
    }
  }

  const bottomvote = () => {
    if (voted) {
      voteAction()
    }
  }

  return (
    <div className='flex pb-2 flex-col border-gray-300 border-opacity-30 border-b mb-2'>

      <div className='flex gap-3'>

      <div className='flex flex-col  items-center justify-center'>

        <div onClick={voteActionTop.bind(null)}>

          <ArrowIconTop activeRule={voted} />
        </div>

        <span className='text-text'>{question.vote?.length || 0}</span>

        <div onClick={bottomvote}>
        <ArrowBottoIcon activeRule={!voted} />
        </div>

      

        <div className='flex flex-col gap-3 py-1'>
          
          {!isComment && <BookmarkIcon className='h-5 text-text transition-all duration-200 cursor-pointer hover:text-white' />}

          <ClockIcon className='h-5 text-text transition-all duration-200 cursor-pointer hover:text-white' />

        </div>

      </div>

      <div className='flex flex-col'>

        <div className={'text-white py-2 text-sm ' + ( isComment ? 'min-h-[50px]' : 'min-h-[130px]' )} dangerouslySetInnerHTML={{__html: question.body}} />

        { <div className='flex gap-2 items-center '>

          {question.tags && question.tags.split(' ').map(item => (
            <p key={item} className='marker'>{item}</p>
          ))}
          
        </div>}

        { isComment &&  <QuestionButtons/>}

        <span className='text-text text-xs'>

          Created at: {dayjs().to(new Date(+question.createdAt))}

        </span>

      </div>
      </div>

    { !isComment &&  <QuestionButtons/>}


    </div>

  )
}

export default observer(QuestionComment)
