import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';
import { FilesService } from '../files/files.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task) private taskRepository: typeof Task,
    private fileService: FilesService
  ) {}

  async create(dto: CreateTaskDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const task = await this.taskRepository.create({ ...dto, image: fileName });
    return task;
  }
}
