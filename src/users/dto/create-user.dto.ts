import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(10)
  name: string;

  @ApiProperty()
  @MaxLength(10)
  username: string;

  @ApiProperty()
  @MaxLength(10)
  password: string;

  // -- Example of non required field
  // @ApiProperty({ required: false })
  // age?: number;
}
