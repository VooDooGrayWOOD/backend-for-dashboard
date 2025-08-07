import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  ParseFilePipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @UsePipes(new ValidationPipe({ transform: true }))
  createTask(@Body() dto: CreateTaskDto, @UploadedFile() image) {
    return this.taskService.create(dto, image);
  }
}
