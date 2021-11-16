import { Role } from '.prisma/client'
import { prismaClient } from '../../prisma'

export const roles = async (): Promise<Role[]> => {
  try {
    const roles = await prismaClient.role.findMany()
    return roles
  } catch (error) {
    throw new Error(error)
  }
}
