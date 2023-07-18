import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ description: 'Название события', type: String })
  title: string;
  @ApiProperty({ description: 'Описание события', type: String })
  descr: string;
  @ApiProperty({ description: 'Фото', type: String })
  kdpv_url: string;
}
