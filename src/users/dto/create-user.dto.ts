import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(10)
  name: string;

  // -- Example of non required field
  // @ApiProperty({ required: false })
  // age?: number;
}
