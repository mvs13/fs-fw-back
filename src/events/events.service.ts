import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  findOne(id: number) {
    return this.eventRepository.findOneBy({ id });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventRepository.save({ ...updateEventDto, id });
  }

  remove(id: number) {
    return this.eventRepository.delete(id);
  }
}
