import { IsEmail } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { RoleInputInterface } from '../role-input'

@InputType()
export class UserInputInterface {
  @Field()
  name: string

  @IsEmail({}, { message: 'invalid email' })
  @Field()
  email: string

  @Field()
  password: string

  @Field({ nullable: true })
  active?: boolean

  @Field(() => [RoleInputInterface])
  roles: RoleInputInterface[]
}
