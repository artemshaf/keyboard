import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayloadWithRefrToken } from '../../auth/types';

export const CurrentUser = createParamDecorator(
  (
    data: keyof JwtPayloadWithRefrToken | undefined,
    context: ExecutionContext,
  ) => {
    const req = context.switchToHttp().getRequest();

    const user = req.user;

    return data ? user[data] : user;
  },
);
