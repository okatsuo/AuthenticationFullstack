import { User } from '.prisma/client'
import { UserInputInterface } from '../../main/inputs/user-input'
import { prismaClient } from '../prisma'

export const createUser = async (fields: UserInputInterface): Promise<User> => {
  const newUser = await prismaClient.user.create({
    data: fields
  })

  return newUser
}
