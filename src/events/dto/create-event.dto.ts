import { ApiProperty } from '@nestjs/swagger';
import { EventCategory } from 'src/event-category/entities/event-category.entity';

export class CreateEventDto {
  // id: number;
  @ApiProperty({ description: 'Название события', type: String })
  title: string;
  @ApiProperty({ description: 'Описание события', type: String })
  descr: string;
  @ApiProperty({ description: 'Дата начала', type: String })
  dateStart: Date;
  @ApiProperty({ description: 'Время начала', type: String })
  category: EventCategory;
  timeStart: Date;
  kdpv_url: string;
}
