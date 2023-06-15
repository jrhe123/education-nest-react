import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from './dto/user-input.type';
import { UserType } from './dto/user.type';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean)
  async create(@Args('params') params: UserInput): Promise<boolean> {
    return await this.userService.create(params);
  }

  @Query(() => UserType)
  async find(@Args('id') id: string): Promise<UserType> {
    return await this.userService.find(id);
  }

  @Mutation(() => Boolean)
  async update(
    @Args('id') id: string,
    @Args('params') params: UserInput,
  ): Promise<boolean> {
    return await this.userService.update(id, params);
  }

  @Mutation(() => Boolean)
  async delete(@Args('id') id: string): Promise<boolean> {
    return await this.userService.del(id);
  }
}
