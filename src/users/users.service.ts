import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find(); // SELECT * FROM user
  }

  async findById(userId: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneOrFail(userId);
      return user;
    } catch (err) {
      // handle error
      throw err;
    }
  }

  createUser(name: string, username: string, password: string): Promise<User> {
    const newUser = this.usersRepository.create({ name, username, password });
    return this.usersRepository.save(newUser);
  }

  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.findById(id);
    user.name = name;
    return this.usersRepository.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.findById(id);
    return this.usersRepository.remove(user);
  }

  async findByUsername(username: string): Promise<User> {
    try {
      const user = await this.usersRepository
        .createQueryBuilder('user')
        .select('user')
        .where('user.username = :username', { username: username })
        .getOne();
      return user;
    } catch (err) {
      // handle error
      throw err;
    }
  }
}
