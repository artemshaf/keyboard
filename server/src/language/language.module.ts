import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { Language } from './models/language.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Language])],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
