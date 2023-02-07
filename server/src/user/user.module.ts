import { UserRole } from './../role/models/user-role.model';
import { PassportModule } from '@nestjs/passport';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { RoleModule } from '../role/role.module';
import { AuthModule } from '../auth/auth.module';
import { Role } from '../role/models/role.model';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    JwtModule.register({}),
    PassportModule.register({
      defaultStrategy: process.env.JWT_ACCESS,
    }),
    SequelizeModule.forFeature([User, Role, UserRole]),
    RoleModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
