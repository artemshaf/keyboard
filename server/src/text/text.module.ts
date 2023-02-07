import { TextController } from './text.controller';
import { Module } from '@nestjs/common';
import { TextService } from './text.service';
import { Text } from './models/text.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserText } from './models/uset-text.model';
import { User } from '../user/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Text, User, UserText])],
  controllers: [TextController],
  providers: [TextService],
  exports: [TextService],
})
export class TextModule {}
