import { UserLogin } from '../../main/schemas/login'
import { prismaClient } from '../prisma'
import * as jwt from 'jsonwebtoken'

export const login = async (email: string, password: string): Promise<UserLogin> => {
  const user = await prismaClient.user.findFirst({ where: { email } })

  if (user.password !== password) throw new Error('Wrong credentials')

  const token = jwt.sign({ id: user.id }, 'secret_key')

  return {
    token,
    user
  }
}
