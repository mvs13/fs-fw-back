import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ue_event_category')
export class EventCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
