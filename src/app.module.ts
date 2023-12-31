import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// Работа с конфигурационным файлом
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { EventCategoryModule } from './event-category/event-category.module';
import { EventsModule } from './events/events.module';
import { EventCategory } from './event-category/entities/event-category.entity';
import { Event } from './events/entities/event.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Подключение БД
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWD,
      database: process.env.DB_NAME,
      entities: [User, EventCategory, Event],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    EventCategoryModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
