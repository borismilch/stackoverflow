import UserResolvers from "./UserResolvers";
import QuestionResolver from "./QuestionResolver";
import CommentResolver from './CommentResolvers'
import VoteResolver from "./VoteResolver";

export default {
  Query: {
    ...UserResolvers.Query,
    ...QuestionResolver.Query,
    ...CommentResolver.Query,
  },

  Mutation: {
    ...UserResolvers.Mutation,
    ...QuestionResolver.Mutation,
    ...CommentResolver.Mutation,
    ...VoteResolver.Mutation
  },
  Question: {
    ...QuestionResolver.Question
  },
  Comment: {
    ...CommentResolver.Comment
  }
}
