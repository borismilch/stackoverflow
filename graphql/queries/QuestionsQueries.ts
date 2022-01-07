import {gql} from '@apollo/client'

export const CREATE_QUESTION = gql `
  mutation CreateQuestion($question: QuestionInput) {
  createQuestion(question: $question) {
    id
  }
}
`

export const GET_QUESTION_BY_ID = gql `

query GetQuestion($questionId: String) {
  getQuestion(questionId: $questionId) {
    id
    createdAt
    votes
    title
    body
    tags
    isClosed
    creatorId
    watched
    comments {
      id
      createdAt
      votes
      body
      isClosed
      creatorId
      questionId
    }
    vote {
      id 
      creatorId
    }

  }
}

`
export const GET_ALL_QQUESTIONS = gql `
query Query {
  getAllQuestions {
    id
    createdAt
    votes
    title
    body
    tags
    isClosed
    watched
    creatorId
    creator {
      username
    }
    comments {
      id
    }
    vote {
      id
    }

  }
}
`

export const WATCH_QUESTION = gql `
  mutation CreateComment($questionId: String) {
  watchQuestion(questionId: $questionId) {
    id
  }
}
`