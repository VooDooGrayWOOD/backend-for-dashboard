import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'User email address' })
  @IsString({ message: 'It should be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({ example: '123', description: 'User password' })
  @IsString({ message: 'It should be a string' })
  @Length(4, 16, { message: 'No less than 4 and no more than 16 characters' })
  readonly password: string;
}
