import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Text } from '../../text/entity/text.entity';
import { User } from '../../user/entity/user.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne((type) => Text)
  @JoinColumn({ name: 'text_id' })
  text_id: Text;
}
