import { ResultService } from './result.service';
import { ResultController } from './result.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ResultController],
  providers: [ResultService],
})
export class ResultModule {}
