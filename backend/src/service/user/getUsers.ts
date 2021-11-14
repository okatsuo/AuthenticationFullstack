import { User } from '.prisma/client'
import { prismaClient } from 'service/prisma'

export const getUses = async (): Promise<User[]> => {
  const users = await prismaClient.user.findMany()

  return users
}
