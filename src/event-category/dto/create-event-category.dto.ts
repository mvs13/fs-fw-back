import { ApiProperty } from '@nestjs/swagger';

export class CreateEventCategoryDto {
  @ApiProperty({ description: 'Название категории', type: String })
  name: string;
  @ApiProperty({ description: 'Картинка по умолчанию', type: String })
  def_image: string;
}
