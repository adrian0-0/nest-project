import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { UsersDto } from './users.dto.ts';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findAllUsers(): Promise<Users[]> {
    const users = this.usersRepository.find();

    if ((await users).length === 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return users;
  }
  async createUser(userDTO: UsersDto): Promise<UsersDto> {
    const createUser = await this.usersRepository.save(userDTO);
    return createUser;
  }
}
