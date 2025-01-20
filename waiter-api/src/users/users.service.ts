import { Injectable } from '@nestjs/common';

export type User = {
  userId: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: '1',
      username: 'ar',
      password: 'password',
    },
    {
      userId: '2',
      username: 'vn',
      password: 'password',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((x) => x.username === username);
  }
}
