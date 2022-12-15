import { TextController } from './text.controller';
import { Module } from '@nestjs/common';
import { Result } from './entity/user_text.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextService } from './text.service';

@Module({
  imports: [TypeOrmModule.forFeature([Result])],
  controllers: [TextController],
  providers: [TextService],
})
export class TextModule {}
