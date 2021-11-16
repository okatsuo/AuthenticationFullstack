import { Role } from '.prisma/client'
import { RoleInputInterface } from '../../../inputs/role-input'
import { prismaClient } from '../../prisma'

export const roleCreate = async (fields: RoleInputInterface): Promise<Role> => {
  try {
    const newRole = await prismaClient.role.create({
      data: fields
    })
    return newRole
  } catch (error) {
    throw new Error(error)
  }
}
