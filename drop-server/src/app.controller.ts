import { Controller, Get } from '@nestjs/common';
import { UserService } from './modules/user/user.service';

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
}
