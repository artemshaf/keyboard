import { LanguageService } from './language.service';
import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Language } from './models/language.model';
@ApiTags('Языка(language)')
@Controller('language')
export class LanguageController {
  constructor(private languageService: LanguageService) {}

  @ApiOperation({ summary: 'Получение языка по ID' })
  @ApiResponse({ status: HttpStatus.OK, type: Language })
  @Get('/:id')
  getLanguageById(@Param('id') languageId: number) {
    return this.languageService.getLanguageById(languageId);
  }

  @ApiOperation({ summary: 'Получение языка по значению' })
  @ApiResponse({ status: HttpStatus.OK, type: Language })
  @Post('/value')
  getLanguageByValue(@Body() { value }: any) {
    return this.languageService.getLanguageByValue(value);
  }
}
