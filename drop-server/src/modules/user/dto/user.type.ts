import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field()
  id?: string;

  @Field()
  name?: string;

  @Field()
  desc?: string;

  @Field({
    description: 'account info',
  })
  account?: string;
}
