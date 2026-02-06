import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './modules/users/users.service';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';
import { TasksService } from './modules/tasks/tasks.service';
import { TasksController } from './modules/tasks/tasks.controller';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [AuthModule, UsersModule, TasksModule],
  controllers: [AppController, UsersController, TasksController],
  providers: [AppService, UsersService, TasksService],
})
export class AppModule {}
