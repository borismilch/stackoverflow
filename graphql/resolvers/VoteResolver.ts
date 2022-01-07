import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
  Query: {
   
  },

  Mutation: {
    createVote: async (_, {voteInput}) => {

      const prevVote = await prisma.vote.findFirst({
        where: { ...voteInput }
      })

      if (prevVote) {
        const oldVote = await prisma.vote.delete({
          where: {id: prevVote.id}
        })

        return oldVote
      }

      const vote =  await prisma.vote.create({
        data: voteInput
      })

      return vote
    },

  },
}