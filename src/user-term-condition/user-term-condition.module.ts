import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTermCondition } from './entities/userTermCondition.entity';
import { UserTermConditionService } from './user-term-condition.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserTermCondition])],
  providers: [UserTermConditionService],
  exports: [UserTermConditionService],
})
export class UserTermConditionModule {}
