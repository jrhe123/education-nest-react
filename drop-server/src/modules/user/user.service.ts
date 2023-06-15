import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepo.insert(entity);
    if (res?.raw.affectedRows > 0) {
      return true;
    }
    return false;
  }

  async del(id: string): Promise<boolean> {
    const res = await this.userRepo.delete(id);
    if (res?.raw.affectedRows > 0) {
      return true;
    }
    return false;
  }
}
