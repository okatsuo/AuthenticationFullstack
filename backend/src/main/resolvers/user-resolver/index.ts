import { User } from '.prisma/client'
import { UserSchema } from '../../schemas/user-schema'
import { getUsers } from '../../../service/user/getUsers'
import { Arg, Query, Resolver } from 'type-graphql'
import { UserLogin } from '../../schemas/login'
import { login } from '../../../service/user/login'

@Resolver(() => UserSchema)
export class UserResolver {
  @Query(() => [UserSchema])
  async getUsers (
  ): Promise<User[]> {
    const result = await getUsers()
    console.log(result)
    return result
  }

  @Query(() => UserLogin)
  async login (
    @Arg('email') email: string,
      @Arg('password') password: string
  ): Promise<UserLogin> {
    return await login(email, password)
  }
}
