import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

void (async function Bootstrap () {
  const newUser = await prisma.user.create({
    data: {
      name: 'Rafael',
      email: 'rafael@mail.com',
      active: true,
      password: '12345'
    }
  })
  console.log(newUser)
})()
