import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'User email address' })
  readonly email: string;

  @ApiProperty({ example: '123', description: 'User password' })
  readonly password: string;
}
