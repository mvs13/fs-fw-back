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

  async update(id: number, event4Update: UpdateEventCategoryDto) {
    const category = await this.categoryRepository.findOneBy({ id: id });
    category.name = event4Update.name ? event4Update.name : category.name;
    category.def_image = event4Update.def_image
      ? event4Update.def_image
      : category.def_image;
    return this.categoryRepository.save(category);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
