import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TermCondition {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  s3Url: string;

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
