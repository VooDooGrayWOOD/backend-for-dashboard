import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Task } from './tasks.model';
import { FilesModule } from '../files/files.module';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [SequelizeModule.forFeature([User, Task]), FilesModule],
})
export class TasksModule {}
