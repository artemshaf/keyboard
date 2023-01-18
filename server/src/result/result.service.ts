import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Result } from './models/result.model';
import { GetResultDto } from './dto/get-result.dto';

@Injectable()
export class ResultService {
  constructor(
    @InjectModel(Result)
    private resultRepository: typeof Result,
  ) {}

  async getResultById(id: number): Promise<Result> {
    const result = await this.resultRepository.findByPk(id);
    return result;
  }

  async getAllResultByParams(params: GetResultDto): Promise<Result[]> {
    const results = this.resultRepository.findAll({
      where: {
        ...params,
      },
    });
    return results;
  }
}
