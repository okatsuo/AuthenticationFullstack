import { User } from '.prisma/client'
import { UserSchema } from '../../schemas/user-schema'
import { getUsers } from '../../../service/user/getUsers'
import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql'
import { UserLogin } from '../../schemas/login'
import { login } from '../../../service/user/login'
import { authenticateUser } from '../../../service/user/authenticateUser'
import { createUser } from '../../../service/user/createUser'
import { UserInputInterface } from '../../../inputs/user-input'

@Resolver(() => UserSchema)
export class UserResolver {
  @Authorized('ADMIN')
  @Query(() => [UserSchema])
  async getUsers (
  ): Promise<User[]> {
    const result = await getUsers()
    return result
  }

  @Query(() => UserLogin)
  async login (
    @Arg('email') email: string,
      @Arg('password') password: string
  ): Promise<UserLogin> {
    return await login(email, password)
  }

  @Query(() => UserSchema)
  async authenticateUser (
    @Arg('token') token: string
  ): Promise<any> {
    return await authenticateUser(token)
  }

  @Mutation(() => UserLogin)
  async userCreate (
    @Arg('fields') fields: UserInputInterface
  ): Promise<UserLogin> {
    return await createUser(fields)
  }
}
