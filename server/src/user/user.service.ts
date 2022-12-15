import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async get() {
    return this.usersRepo.find();
  }

  // async create(body: any) {
  //   const profile = new Profile();
  //   profile.name = body.name;
  //   profile.lastName = body.lastName;
  //   const newProfile = await this.profilesRepo.save(profile);

  //   const user = new User();
  //   user.email = body.email;
  //   user.password = body.password;
  //   user.profile = newProfile;
  //   return this.usersRepo.save(user);
  // }
}
