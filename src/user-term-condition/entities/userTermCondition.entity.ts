import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserTermCondition {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  termConditionId: number;

  @ApiProperty()
  @Column()
  userId: number;

  @ApiProperty()
  @Column()
  status: boolean;

  @ApiProperty({ type: 'date' })
  @Column()
  createDate: string;

  @ApiProperty()
  @Column({ type: 'date' })
  updateDate: string;

  @ApiProperty()
  @Column({ type: 'date' })
  deleteDate: string;
}
