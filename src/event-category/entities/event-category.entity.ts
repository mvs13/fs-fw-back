import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from 'src/events/entities/event.entity';

@Entity('ue_event_category')
export class EventCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 96 })
  name: string;

  @OneToMany(() => Event, (event) => event.category)
  event: Event[];
}
