import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('/:id')
  getRefreshTokenByUserId(@Param('id') id: number) {
    return this.tokenService.getRefreshTokenByUserId(id);
  }

  @Get('')
  getAllRefreshTokens() {
    return this.tokenService.getAllRefreshTokens();
  }
}
