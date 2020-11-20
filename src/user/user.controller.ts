import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: IUser): Promise<IUser> {
    return this.userService.create(user);
  }

  @Get()
  async listAll(): Promise<IUser[]> {
    return this.userService.findAll();
  }
}
