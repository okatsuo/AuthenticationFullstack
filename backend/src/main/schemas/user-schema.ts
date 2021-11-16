import { Role } from '.prisma/client'
import { Field, Int, ObjectType } from 'type-graphql'
import { RoleSchema } from './role-schema'

@ObjectType()
export class UserSchema {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  active: boolean

  @Field()
  created_at: Date

  @Field()
  updated_at: Date

  @Field(() => [RoleSchema])
  roles: Role[]
}
