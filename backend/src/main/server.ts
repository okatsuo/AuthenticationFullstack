import { prisma } from 'service/prisma'

void (async function Bootstrap () {
  const newUser = prisma.user.create({
    data: {
      name: 'Rafael',
      active: true,
      password: '12345'
    }
  })
  console.log(newUser)
})()
