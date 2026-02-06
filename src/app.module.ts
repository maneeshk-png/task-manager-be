import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersService } from './modules/users/users.service';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';
import { TasksService } from './modules/tasks/tasks.service';
import { TasksController } from './modules/tasks/tasks.controller';
import { TasksModule } from './modules/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/entities/users.entities';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'yourdb',
    entities: [User],
    synchronize: true, // only for dev, auto-creates tables
  }),
    AuthModule, UsersModule, TasksModule],
  controllers: [AppController, UsersController, TasksController],
  providers: [AppService, UsersService, TasksService],
})
export class AppModule {}
