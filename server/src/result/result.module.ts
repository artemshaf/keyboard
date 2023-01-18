import { ResultService } from './result.service';
import { ResultController } from './result.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Result } from './models/result.model';
import { TextModule } from '../text/text.module';
import { Text } from '../text/models/text.model';
import { User } from '../user/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Result, Text, User]), TextModule],
  controllers: [ResultController],
  providers: [ResultService],
})
export class ResultModule {}
