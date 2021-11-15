import { User } from '.prisma/client'
import { prismaClient } from '../prisma'

export const getUsers = async (): Promise<User[]> => {
  try {
    const users = await prismaClient.user.findMany()
    return users
  } catch (error) {
    throw new Error(error)
  }
}
