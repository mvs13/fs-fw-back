import { Module } from '@nestjs/common';
import { EventCategoryService } from './event-category.service';
import { EventCategoryController } from './event-category.controller';
import { EventCategory } from './entities/event-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EventCategory])],
  controllers: [EventCategoryController],
  providers: [EventCategoryService],
  exports: [EventCategoryService],
})
export class EventCategoryModule {}
