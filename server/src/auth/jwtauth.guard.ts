import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { USER_NOT_AUTHORIZED } from './auth.constants';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization.split(' ');
      const bearer = authHeader[0] as string;
      const token = authHeader[1] as string;

      if (bearer.toLocaleLowerCase() !== 'bearer' || !token) {
        throw new UnauthorizedException({ message: USER_NOT_AUTHORIZED });
      }
      const user = this.jwtService.verify(token);
      req.user = user;
      return true;
    } catch (e) {
      throw new UnauthorizedException({ message: USER_NOT_AUTHORIZED });
    }
  }
}
