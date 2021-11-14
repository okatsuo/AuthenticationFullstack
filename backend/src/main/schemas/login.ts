import { Field, ObjectType } from 'type-graphql'
import { UserSchema } from './user-schema'

@ObjectType()
export class UserLogin {
  @Field()
  token: string

  @Field()
  user: UserSchema
}
