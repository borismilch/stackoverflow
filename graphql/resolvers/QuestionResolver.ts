import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default {
  Query: {
    async getQuestion(_, {questionId}, { prisma }) {

      const dbQuestion = await prisma.question.findUnique({
        where: { id: questionId }
      })

      return dbQuestion
     
    },

    async getAllQuestions (_, __, { prisma }) {

      const quests = await  prisma.question.findMany()

      return quests

    }
  },

  Mutation: {

    async createQuestion (_, { question }, {prisma}) {
      console.log(prisma.question)
      const newQuestion = await  prisma.question.create({
        data: question
      })

      return newQuestion
     
    },

    async watchQuestion (_, { questionId }) {

      const question = await prisma.question.findUnique({where: {
        id: questionId
      }})

      const quest = await prisma.question.update({
        where: {
          id: questionId
        },
        data: {
          ...question,
          watched: question.watched + 1,
        }
        
      })

      console.log(quest)

      return quest
    },

    

  },

  Question: {
    creator: async  ({creatorId}, _, {prisma}) => {

      const user = await prisma.user.findUnique({
        where: { id: creatorId }
      })

      console.log(user)

      return user
    },

    comments: async ({id}) => 
      await prisma.comment.findMany({
        where: { questionId: id }
    }),

    vote: async ({id}) => (
      await prisma.vote.findMany({
        where: {
          questionId: id
        }
      })
    )  
  }
}