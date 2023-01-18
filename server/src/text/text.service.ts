import { AddUserTextDto } from './dto/add-user-text.dto';
import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTextDto } from './dto/create-text.dto';
import { DeleteUserTextDto } from './dto/delete-user-text.dto';
import { Text } from './models/text.model';
import { UserText } from './models/uset-text.model';

@Injectable()
export class TextService {
  constructor(
    @InjectModel(Text)
    private textModel: typeof Text,
    @InjectModel(Text)
    private textUserModel: typeof UserText,
  ) {}

  async getAllTexts(): Promise<Text[]> {
    const texts = await this.textModel.findAll();
    return texts;
  }

  async getAllTextsByLanguageId(languageId: number): Promise<Text[]> {
    const texts = await this.textModel.findAll({ where: { languageId } });
    return texts;
  }

  async createText(createTextDto: CreateTextDto): Promise<Text> {
    const text = await this.textModel.create(createTextDto);
    return text;
  }

  async deleteTextFromUser(deleteTextDto: DeleteUserTextDto): Promise<number> {
    const userText = await this.textUserModel.destroy({
      where: {
        userId: deleteTextDto.userId,
      },
    });
    return userText;
  }

  async addTextToUser(@Body() addUserTextDto: AddUserTextDto) {
    const userText = await this.textUserModel.create(addUserTextDto);
    return userText;
  }
}
