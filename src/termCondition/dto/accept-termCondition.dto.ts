import { ApiProperty } from '@nestjs/swagger';

export class AcceptTermConditionDto {
  @ApiProperty()
  termConditionId: number;

  @ApiProperty()
  userId: number;
}
