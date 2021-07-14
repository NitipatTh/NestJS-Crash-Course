import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TermConditionController } from './termCondition.controller';
import { TermConditionService } from './termCondition.service';
import { TermCondition } from './entities/termCondition.entity';
import { UserTermConditionModule } from 'src/user-term-condition/user-term-condition.module';

@Module({
  imports: [TypeOrmModule.forFeature([TermCondition]), UserTermConditionModule],
  controllers: [TermConditionController],
  providers: [TermConditionService],
  exports: [TermConditionService],
})
export class TermConditionModule {}
