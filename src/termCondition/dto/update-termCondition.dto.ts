import { ApiProperty } from '@nestjs/swagger';

export class UpdateTermConditionDto {
  @ApiProperty()
  s3Url: string;
}
