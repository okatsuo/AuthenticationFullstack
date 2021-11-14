import { User } from '.prisma/client'
import { UserSchema } from '../../schemas/user-schema'
import { getUsers } from '../../../service/user/getUsers'
import { Query, Resolver } from 'type-graphql'

@Resolver(() => UserSchema)
export class UserResolver {
  @Query(() => [UserSchema])
  async getUsers (
  ): Promise<User[]> {
    const result = await getUsers()
    console.log(result)
    return result
  }
}
