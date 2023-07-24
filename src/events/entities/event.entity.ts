import { EventCategory } from 'src/event-category/entities/event-category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('oe_events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 256, nullable: true })
  title: string;

  @Column('varchar', { length: 512 })
  descr: string;

  @Column('date')
  dateStart: Date;

  @Column('time', { nullable: true })
  timeStart: Date;

  @Column('varchar', { length: 128, nullable: true })
  kdpv_url: string;

  @ManyToOne(() => EventCategory, (category) => category.event)
  category: EventCategory;
}
