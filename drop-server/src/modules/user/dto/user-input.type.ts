import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  name: string;

  @Field()
  desc: string;
}
