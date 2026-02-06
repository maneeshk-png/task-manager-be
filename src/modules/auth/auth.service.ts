import { ConflictException, Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(private readonly usersRepo:UsersRepository){}


    //Register New User
    async Register(dto:RegisterDto){
        //check for duplcate username
        const existingUser=await this.usersRepo.findByUsername(dto.username);

        if(existingUser){
            throw new ConflictException('Username already exists');
        }

        //Hash password
        const hashedPassword=await bcrypt.hash(dto.password,10);
    }
}
