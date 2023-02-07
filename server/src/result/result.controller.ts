import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { ResultService } from './result.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetResultDto } from './dto/get-result.dto';
import { ValidatePayloadExistsPipe } from '../pipes/validatepayloadexists.pipe';
import { Result } from './models/result.model';
import { HttpStatus } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
@ApiTags('Результат(result)')
@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @ApiOperation({ summary: 'Добавить результат' })
  @ApiResponse({ status: HttpStatus.OK, type: Result })
  @Post('/add')
  async addResult(@Body() dto: CreateResultDto) {
    return this.resultService.addResult(dto);
  }

  @ApiOperation({ summary: 'Получить результат по ID' })
  @ApiResponse({ status: HttpStatus.OK, type: Result })
  @Get('/:id')
  async getResultById(@Param('id') id: number) {
    return this.resultService.getResultById(id);
  }

  @ApiOperation({ summary: 'Получить статистику по результам пользователя' })
  // @ApiResponse({ status: HttpStatus.OK, type: Result })
  @Get('/statistic/:id')
  async getResultStatisticByUserId(@Param('id') id: number) {
    return this.resultService.getResultStatisticByUserId(id);
  }

  @ApiOperation({ summary: 'Получить все результаты по параметрам' })
  @ApiResponse({ status: HttpStatus.OK, type: Array<Result> })
  @UsePipes(new ValidatePayloadExistsPipe())
  @Post('/params')
  async getAllResultsByParams(@Body() params: GetResultDto) {
    return this.resultService.getAllResultByParams(params);
  }
}
