import { Role, User } from '.prisma/client'
import { UserSchema } from '../../schemas/user-schema'
import { getUsers } from '../../../service/user/getUsers'
import { Arg, Authorized, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { UserLogin } from '../../schemas/login'
import { login } from '../../../service/user/login'
import { authenticateUser } from '../../../service/user/authenticateUser'
import { createUser } from '../../../service/user/createUser'
import { UserInputInterface } from '../../../inputs/user-input'
import { userRole } from '../../../service/user/userRole'
import { Roles } from '../../../shared/enums'

@Resolver(() => UserSchema)
export class UserResolver {
  @FieldResolver()
  async roles (@Root() user: User): Promise<Role[]> {
    return await userRole(user.id)
  }

  @Authorized(Roles.ADMIN)
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
