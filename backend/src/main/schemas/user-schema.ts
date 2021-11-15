import { Field, Int, ObjectType } from 'type-graphql'

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
}
