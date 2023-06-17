import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class FileType {
  @Field()
  url?: string;

  @Field()
  filename?: string;
}
