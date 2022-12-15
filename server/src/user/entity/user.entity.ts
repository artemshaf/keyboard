import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, length: 50 })
  email: string;

  @Column({ type: String, length: 50 })
  password: string;
}
