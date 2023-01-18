import { Language } from './models/language.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language) private readonly languageRepository: typeof Language,
  ) {}

  async getLanguageById(langaugeId: number) {
    const language = await this.languageRepository.findByPk(langaugeId);
    return language;
  }

  async getLanguageByValue(language: string) {
    const searchLanguage = await this.languageRepository.findOne({
      where: { language },
    });
    return searchLanguage;
  }
}
