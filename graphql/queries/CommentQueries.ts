import { gql } from "@apollo/client";

export const DELETE_COMMENT = gql `
  mutation CreateComment($commentId: String) {
  deleteComment(commentId: $commentId) {
    id
    body
    createdAt
    votes
    isClosed
    questionId
    creatorId
    vote {
      id 
      creatorId
    }

  }
}
`

export const UPDATE_COMMENT = gql` 
  mutation CreateComment($commentInput: CommentInput, $commentId: String) {
  updateComment(commentInput: $commentInput, commentId: $commentId) {
    id
    createdAt
    votes
    body
    isClosed
    questionId
    creatorId
    vote {
      id 
      creatorId
    }

  }
}
`

export const CREATE_COMMENT = gql `
  mutation CreateComment($commentInput: CommentInput) {
  createComment(commentInput: $commentInput) {
    id
    createdAt
    votes
    body
    isClosed
    questionId
    creatorId

  }
}
`