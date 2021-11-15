import { UserLogin } from '../../main/schemas/login'
import { prismaClient } from '../prisma'
import * as jwt from 'jsonwebtoken'

export const login = async (email: string, password: string): Promise<UserLogin> => {
  try {
    const user = await prismaClient.user.findFirst({ where: { email } })

    if (!user || user.password !== password) throw new Error('Wrong credentials')

    const token = jwt.sign(
      { id: user.id },
      process.env.SECRET_KEY, {
        expiresIn: Number(process.env.TOKEN_EXPIRE_TIME) * 60 || '1h'
      }
    )
    return {
      token,
      user
    }
  } catch (error) {
    throw new Error(error)
  }
}
