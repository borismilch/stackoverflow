import { gql } from 'apollo-server-micro'

export const typeDefs = gql `

  type User {
    email: String 
    username: String 
    createdAt: String
    picture: String 
    id: String 
    reputation: Int 
    bio: String
    location: String
  }

  type Question {
    id:  String 
    createdAt: String 
    vote: [Vote]
    title:  String 
    body: String 
    tags: String 
    isClosed: Boolean 
    creatorId: String 
    creator: User
    comments: [Comment]
    votes: Int
    watched: Int
  }

  input VoteInput {
    creatorId: String
    commentId: String
    questionId: String
  }

  type Vote {
    id: String 
    creatorId: String
    commentId: String
    questionId: String
  }

  input QuestionInput {
    title: String 
    body: String 
    tags: String 
    creatorId: String
   
  }

  input UserInput {
    email: String 
    username: String 
    picture: String 
    bio: String
    location: String

  }

  type Comment {
    id: String 
    createdAt: String 
    votes: Int
    vote: [Vote]
    body: String 
    isClosed: Boolean 
    questionId: String
    creatorId: String
  }

  input CommentInput {
    body: String 
    creatorId: String 
    questionId: String
  }

  type Mutation {
    checkUser (user: UserInput): User
    updateUser(user: UserInput): User
    createQuestion(question: QuestionInput): Question

    createComment (commentInput: CommentInput): Comment
    updateComment (commentInput: CommentInput, commentId: String): Comment
    deleteComment (commentId: String): Comment

    watchQuestion(questionId: String): Question

    createVote(voteInput: VoteInput): Vote

  }

  type Query {
    getUser(email: String): User
    getQuestion(questionId: String): Question 
    getAllQuestions: [Question]
  }

  


`