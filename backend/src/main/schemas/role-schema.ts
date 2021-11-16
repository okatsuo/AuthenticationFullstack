import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class RoleSchema {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field()
  created_at: Date

  @Field()
  updated_at: Date
}
