import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('oe_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
