import { AuthChecker } from 'type-graphql'
import { userRole } from '../../service/user/userRole'
import jwt from 'jsonwebtoken'
import { UserToken } from '../../service/user/authenticateUser'
import { Role } from '.prisma/client'

export const authChecker: AuthChecker<{authorization: string}> = async (
  { context: { authorization } },
  roles: string[]): Promise<boolean> => {
  try {
    const userInfo = jwt.verify(authorization, process.env.SECRET_KEY) as UserToken
    const userRoles = await userRole(userInfo.id)
    return Boolean(userRoles.find((role: Role) => roles.includes(role.name)))
  } catch (error) {
    throw new Error(error)
  }
}
