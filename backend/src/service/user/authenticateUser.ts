import { User } from '.prisma/client'
import * as jwt from 'jsonwebtoken'
import { prismaClient } from '../prisma'

interface UserToken {
  id: number
  iat: number
}

export const authenticateUser = async (token: string): Promise<User> => {
  try {
    const userInfo = jwt.verify(token, process.env.SECRET_KEY) as UserToken
    return await prismaClient.user.findFirst({ where: { id: userInfo.id } })
  } catch (error) {
    throw new Error(error)
  }
}
