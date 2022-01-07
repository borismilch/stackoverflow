export default {
  Query: {
    async getUser(_, {email}, { prisma }) {
      try {
        const user = await prisma.findUnique({
          where: {
            email
          }
        })

        return user
      } catch (e) { console.log(e) }
    }
  },

  Mutation: {

    async checkUser (_, { user }, {prisma}) {

      try {
        const serverUser = await prisma.user.findUnique({
          where: { email: user.email }
        })

        if (!serverUser) {

          const newUser = await prisma.user.create({
            data: user
          })

          return newUser
        }

        return serverUser
      } catch (e) { console.log(e) }
    },

    async updateUser  (_, { user }, { prisma }) {

      const dataUser = await prisma.user.update({
        where: {
          email: user.email
        },
        data: user
      })

      return dataUser
    }

  },
}