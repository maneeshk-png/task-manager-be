import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'class-transformer';
import { UsersRepository } from './users.repository';
import { User } from './entities/users.entities';

@Module({
    imports:[
        TypeOrmModule.forFeature([User])
    ],
    providers:[UsersRepository],
    exports:[UsersRepository]
})
export class UsersModule {}
