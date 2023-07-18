import { EventCategory } from 'src/event-category/entities/event-category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ue_events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 256 })
  title: string;

  @Column('varchar', { length: 512 })
  descr: string;

  @Column('varchar', { length: 128 })
  kdpv_url: string;

  @ManyToOne(() => EventCategory, (category) => category.event)
  category: EventCategory;
}
