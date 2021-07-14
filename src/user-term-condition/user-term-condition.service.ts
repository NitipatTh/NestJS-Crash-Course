import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTermCondition } from './entities/userTermCondition.entity';

@Injectable()
export class UserTermConditionService {
  constructor(
    @InjectRepository(UserTermCondition)
    private userTermConditionRepository: Repository<UserTermCondition>,
  ) {}

  async createUserTermCondition(
    termConditionId: number,
    userId: number,
  ): Promise<UserTermCondition> {
    const userTermCondition = this.userTermConditionRepository.create({
      termConditionId: termConditionId,
      userId: userId,
      status: true,
      createDate: new Date().toDateString(),
      updateDate: new Date().toDateString(),
      deleteDate: new Date().toDateString(),
    });
    return this.userTermConditionRepository.save(userTermCondition);
  }
}
