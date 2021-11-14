import * as jwt from 'jsonwebtoken'
import { prismaClient } from '../prisma'

interface Token {
  id: number
  iat: number
}

export const authenticateUser = async (token: string): Promise<any> => {
  try {
    const userInfo = jwt.verify(token, 'secret_key') as Token
    return await prismaClient.user.findFirst({ where: { id: userInfo.id } })
  } catch (error) {

  }
}
