import { Field, InputType } from 'type-graphql'

@InputType()
export class RoleInputInterface {
  @Field()
  name: string
}
