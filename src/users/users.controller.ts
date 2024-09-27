import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getUsers() : object[] {
        return this.userService.getUsers();
    }

    @Post()
    posUser() : object {
        return this.userService.addUser();
    }
}
