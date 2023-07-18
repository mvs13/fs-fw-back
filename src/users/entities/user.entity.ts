import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('oe_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 64 })
  firstName: string;

  @Column('varchar', { length: 64 })
  lastName: string;

  @Column('varchar', { length: 32 })
  email: string;

  @Column('varchar', { length: 64 })
  password: string;
}
