import { AddUserTextDto } from './dto/add-user-text.dto';
import { CreateTextDto } from './dto/create-text.dto';
import { Controller, Get, Param, Body, Post, Delete } from '@nestjs/common';
import { TextService } from './text.service';
import { DeleteUserTextDto } from './dto/delete-user-text.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';
import { UserText } from './models/uset-text.model';
import { Text } from './models/text.model';
@ApiTags('Текст(text)')
@Controller('text')
export class TextController {
  constructor(private readonly textService: TextService) {}

  @ApiOperation({ summary: 'Получить все текста' })
  @ApiResponse({ status: HttpStatus.OK, type: Array<Text> })
  @Get('')
  getAllText() {
    return this.textService.getAllTexts();
  }

  @ApiOperation({ summary: 'Получение всех текстов по заданному языку' })
  @ApiResponse({ status: HttpStatus.OK, type: Array<Text> })
  @Get('/language/:id')
  getAllTextsByLanguageId(@Param('id') languageId: number) {
    return this.textService.getAllTextsByLanguageId(languageId);
  }

  @ApiOperation({ summary: 'Создать текст' })
  @ApiResponse({ status: HttpStatus.OK, type: Text })
  @Post('/create')
  createText(@Body() createTextDto: CreateTextDto) {
    return this.textService.createText(createTextDto);
  }

  @ApiOperation({ summary: 'Добавить текст пользователю' })
  @ApiResponse({ status: HttpStatus.OK, type: UserText })
  @Post('/addUser')
  addTextToUser(@Body() addTextDto: AddUserTextDto) {
    return this.textService.addTextToUser(addTextDto);
  }

  @ApiOperation({ summary: 'Удалить текст у пользователя' })
  @ApiResponse({ status: HttpStatus.OK })
  @Delete('deleteUser')
  deleteTextFromUser(@Body() deleteTextDto: DeleteUserTextDto) {
    return this.textService.deleteTextFromUser(deleteTextDto);
  }
}
