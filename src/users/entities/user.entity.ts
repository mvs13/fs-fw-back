import { Event } from 'src/events/entities/event.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('oe_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 64, nullable: true })
  firstName: string;

  @Column('varchar', { length: 64, nullable: true })
  lastName: string;

  @Column('varchar', { length: 32, nullable: true })
  email: string;

  @Column('varchar', { length: 64, nullable: true })
  password: string;

  @ManyToMany(() => Event)
  @JoinTable()
  events: Event[];
}
