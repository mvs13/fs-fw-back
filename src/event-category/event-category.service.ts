import { Injectable } from '@nestjs/common';
import { CreateEventCategoryDto } from './dto/create-event-category.dto';
import { UpdateEventCategoryDto } from './dto/update-event-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventCategory } from './entities/event-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventCategoryService {
  constructor(
    @InjectRepository(EventCategory)
    private categoryRepository: Repository<EventCategory>,
  ) {}

  create(newCategory: CreateEventCategoryDto) {
    return this.categoryRepository.save(newCategory);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOneBy({ id });
  }

  update(id: number, event4Update: UpdateEventCategoryDto) {
    return this.categoryRepository.save({ ...event4Update, id });
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
