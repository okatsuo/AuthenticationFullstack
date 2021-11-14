import * as jwt from 'jsonwebtoken'
import { prismaClient } from '../prisma'
// Promise<User>
export const authenticateUser = async (token: string): Promise<any> => {
  try {
    const userInfo = jwt.verify(token, 'secret_key')
    console.log(userInfo)
    return await prismaClient.user.findFirst({ where: { id: 1 } })
  } catch (error) {

  }
}
