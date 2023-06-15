import { Controller, Get } from '@nestjs/common';
import { UserService } from './modules/user/user.service';
import { User } from './modules/user/models/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return 'app is running';
  }

  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.create({
      name: 'super admin',
      desc: 'super admin desc',
      tel: '1234567890',
      password: '123456',
      account: 'account',
    });
  }

  @Get('/del')
  async del(): Promise<boolean> {
    return await this.userService.del('f4f8f811-aba9-4887-b008-060982a9baf8');
  }

  @Get('/update')
  async update(): Promise<boolean> {
    return await this.userService.update(
      '720f3703-89c4-407e-ac49-ac071bdb98c6',
      {
        name: 'super admin updated',
        desc: 'super admin desc updated',
      },
    );
  }

  @Get('/find')
  async find(): Promise<User> {
    return await this.userService.find('720f3703-89c4-407e-ac49-ac071bdb98c6');
  }
}
