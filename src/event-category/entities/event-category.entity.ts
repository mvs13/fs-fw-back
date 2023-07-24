import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from 'src/events/entities/event.entity';

@Entity('oe_event_category')
export class EventCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 96 })
  name: string;

  @Column('varchar', { length: 512 })
  def_image: string;

  @OneToMany(() => Event, (event) => event.category)
  event: Event[];
}
