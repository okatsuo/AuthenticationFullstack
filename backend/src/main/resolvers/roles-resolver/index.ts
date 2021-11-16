import { Role } from '.prisma/client'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { roles } from '../../../service/role/getRoles'
import { roleCreate } from '../../../service/role/roleCreate'
import { RoleInputInterface } from '../../../inputs/role-input'
import { RoleSchema } from '../../schemas/role-schema'

@Resolver(() => RoleSchema)
export class RoleResolver {
  @Query(() => [RoleSchema])
  async roles (): Promise<Role[]> {
    return await roles()
  }

  @Mutation(() => RoleSchema)
  async roleCreate (
    @Arg('fields') fields: RoleInputInterface
  ): Promise<Role> {
    return await roleCreate(fields)
  }
}
