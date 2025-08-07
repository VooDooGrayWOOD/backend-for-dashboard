import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Title', description: 'Task title' })
  @IsString({ message: 'It should be a string' })
  readonly title: string;

  @ApiProperty({ example: 'content', description: 'Task content' })
  @IsString({ message: 'It should be a string' })
  readonly content: string;

  @ApiProperty({ example: 'Title', description: 'Task title' })
  @IsNumber({}, { message: 'It should be a number' })
  @Transform(({ value }) => Number(value))
  readonly userId: number;
}
