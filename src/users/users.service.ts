import { Injectable } from '@nestjs/common';

interface Users {
  name: string;
  phone: string;
  email: string;
}

@Injectable()
export class UsersService {
  users: Users[] = [];

  getUsers(): object[] {
    return this.users;
  }

  addUser(): object {
    return {
      name: 'novo',
      phone: '99999999',
      email: 'novo@gmail.com',
    };
  }
}

// [
//     {
//         name: "Latina",
//         phone: "99999999",
//         email: "latina@gmail.com",
//     },
//     {
//         name: "Luiza",
//         phone: "99999999",
//         email: "luiza@gmail.com",
//     }
// ]
