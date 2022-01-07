import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
  Query: {
   
  },

  Mutation: {

    createComment: async (_, {commentInput}) =>  await prisma.comment.create({data: commentInput}),

    updateComment: async (_, { commentInput, commentId }) => {

      const comment = await prisma.comment.findUnique({
        where: { id: commentId }
      })

      console.log(comment)

      const updatedObj = await prisma.comment.update({
        where: { id: commentId },
        data: {...comment, ...commentInput}
      })

      return updatedObj

    } ,

    deleteComment: async (_, { commentId }, { prisma }) => 
      await prisma.comment.delete({
        where: { id: commentId }
      })
  },

  Comment: {
    vote: async ({id}) => {
      const votes =  await prisma.vote.findMany({
        where: { commentId: id }
      })

      console.log(votes)


      return votes

    }
  }
}