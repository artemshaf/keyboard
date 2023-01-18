import { Reflector } from '@nestjs/core';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY, ROLE_NOT_ALLOW_SUCCESS } from './auth.constants';

@Injectable()
export class RolesAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const reqRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!reqRoles) {
        return true;
      }

      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization.split(' ');
      const bearer = authHeader[0] as string;
      const token = authHeader[1] as string;

      if (bearer.toLocaleLowerCase() !== 'bearer' || !token) {
        throw new UnauthorizedException({ message: 'User not authorazed' });
      }

      const user = this.jwtService.verify(token);
      req.user = user;
      return user.roles.some((role) => reqRoles.includes(role.value));
    } catch (error) {
      throw new HttpException(
        { message: ROLE_NOT_ALLOW_SUCCESS },
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
