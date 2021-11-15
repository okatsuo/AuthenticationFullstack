import { IsEmail } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class UserInputInterface {
  @Field()
  name: string

  @IsEmail({}, { message: 'invalid email' })
  @Field()
  email: string

  @Field()
  password: string

  @Field()
  active: boolean
}
