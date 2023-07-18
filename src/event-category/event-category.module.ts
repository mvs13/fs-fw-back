import { Module } from '@nestjs/common';
import { EventCategoryService } from './event-category.service';
import { EventCategoryController } from './event-category.controller';

@Module({
  controllers: [EventCategoryController],
  providers: [EventCategoryService]
})
export class EventCategoryModule {}
