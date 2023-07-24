import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  create(newEvent: CreateEventDto) {
    return this.eventRepository.save(newEvent);
  }

  findAll() {
    return this.eventRepository.find();
  }

  findAllActual() {
    return this.eventRepository.find({
      relations: {
        category: true,
      },
      where: {
        dateStart: Raw((alias) => `${alias} >= NOW()`),
      },
      order: {
        dateStart: 'ASC',
      },
    });
  }

  findOne(id: number) {
    return this.eventRepository.findOneBy({ id });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    // const event = await this.eventRepository.findOneBy({ id: id });
    // event = { ...updateEventDto, id: id };
    return this.eventRepository.save({ ...updateEventDto, id: id });
  }

  remove(id: number) {
    return this.eventRepository.delete(id);
  }
}
