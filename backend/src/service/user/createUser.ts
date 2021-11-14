import { User } from '.prisma/client'
import { prismaClient } from 'service/prisma'

export interface UserInputInterface {
  name: string
  email: string
  password: string
  active: boolean
}

export const createUser = async (fields: UserInputInterface): Promise<User> => {
  const newUser = await prismaClient.user.create({
    data: fields
  })

  return newUser
}
