import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Language } from '../../language/entity/language.entity';

@Entity()
export class Text {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  text: string;

  @ManyToOne(() => Language, (language) => language.id)
  @JoinColumn({ name: 'language_id' })
  language: string;
}
