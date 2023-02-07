import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Result, ResultEnum } from './models/result.model';
import { GetResultDto } from './dto/get-result.dto';
import { CreateResultDto } from './dto/create-result.dto';

@Injectable()
export class ResultService {
  constructor(
    @InjectModel(Result)
    private resultRepository: typeof Result,
  ) {}

  async addResult(dto: CreateResultDto): Promise<Result> {
    const result = await this.resultRepository.create(dto);
    return result;
  }

  async getResultStatisticByUserId(id: number) {
    const allUserResults = await this.resultRepository.findAll({
      where: { userId: id },
    });

    let wordResult = {
      count: 0,
      worse: 100,
      best: 0,
    };
    let letterResult = {
      count: 0,
      worse: 100,
      best: 0,
    };

    allUserResults.map((item) => {
      console.log(item.correct.length);
      const bestStatistic = +(
        (item.correct.length / (item.wrong.length + item.correct.length)) *
        100
      ).toFixed(2);

      if (item.type === ResultEnum[0]) {
        wordResult = {
          count: wordResult.count + 1,
          best:
            wordResult.best > bestStatistic ? wordResult.best : bestStatistic,
          worse: +(
            100 -
            (wordResult.best > bestStatistic ? wordResult.best : bestStatistic)
          ).toFixed(2),
        };
        return;
      }

      letterResult = {
        count: letterResult.count + 1,
        best:
          letterResult.best > bestStatistic ? letterResult.best : bestStatistic,
        worse: +(
          100 -
          (letterResult.best > bestStatistic
            ? letterResult.best
            : bestStatistic)
        ).toFixed(2),
      };
      return;
    });

    return {
      [ResultEnum[0]]: wordResult,
      [ResultEnum[1]]: letterResult,
    };
  }

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
