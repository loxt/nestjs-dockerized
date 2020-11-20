import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser } from './interfaces/user.interface';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(user: IUser): Promise<IUser> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<IUser[]> {
    return this.userRepository.find();
  }
}
