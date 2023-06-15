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
    if (res?.affected > 0) {
      return true;
    }
    return false;
  }

  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepo.update(id, entity);
    if (res?.affected > 0) {
      return true;
    }
    return false;
  }

  async find(id: string): Promise<User> {
    const res = await this.userRepo.findOne({
      where: {
        id,
      },
    });
    return res;
  }
}
