import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Event } from '../events/entities/event.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  create(newUser: CreateUserDto) {
    return this.usersRepository.save(newUser);
  }

  async register(user: CreateUserDto) {
    const saltOrRounds = 10;
    user.password = await bcrypt.hash(user.password, saltOrRounds);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  findOneByMail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id: id });
    if (user) {
      user.firstName =
        updateUserDto.firstName !== undefined
          ? updateUserDto.firstName
          : user.firstName;
      user.lastName =
        updateUserDto.lastName !== undefined
          ? updateUserDto.lastName
          : user.lastName;
      user.email =
        updateUserDto.email !== undefined ? updateUserDto.email : user.email;
      user.password =
        updateUserDto.password !== undefined
          ? updateUserDto.password
          : user.password;
      return this.usersRepository.save(user);
    } else {
      return { msgError: 'User does not exist' };
    }
    // return this.usersRepository.save({ ...updateUserDto, id });
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }

  async attendToEvent(eventId: number, userId: number) {
    const event = await this.eventRepository.findOneBy({ id: eventId });
    const user = await this.usersRepository.findOneBy({ id: userId });
    if (event && user) {
      Logger.log(user);
      user.events = [event];
      return this.usersRepository.save(user);
    } else {
      return { msgError: 'User or Event does not exist' };
    }
  }
}
