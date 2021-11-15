import { UserInputInterface } from '../../main/inputs/user-input'
import { UserLogin } from '../../main/schemas/login'
import { prismaClient } from '../prisma'
import * as jwt from 'jsonwebtoken'

export const createUser = async (fields: UserInputInterface): Promise<UserLogin> => {
  try {
    const newUser = await prismaClient.user.create({
      data: fields
    })
    const token = jwt.sign(
      { id: newUser.id },
      process.env.SECRET_KEY, {
        expiresIn: Number(process.env.TOKEN_EXPIRE_TIME) * 60 || '1h'
      }
    )
    return {
      user: newUser,
      token
    }
  } catch (error) {
    throw new Error(error)
  }
}
