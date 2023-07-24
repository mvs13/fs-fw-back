import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Имя (реальное)', type: String })
  firstName: string;
  @ApiProperty({ description: 'Фамилия' })
  lastName: string;
  @ApiProperty({ description: 'Адрес электронной почты' })
  email: string;
  @ApiProperty({ description: 'Пароль' })
  password: string;
}
