import { Role } from '.prisma/client'
import { prismaClient } from '../prisma'

export const userRole = async (userId: number): Promise<Role[]> => {
  try {
    const userRole = await prismaClient.role.findMany({ where: { users: { some: { id: userId } } } })
    return userRole
  } catch (error) {
    throw new Error(error)
  }
}
