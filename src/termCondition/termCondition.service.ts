import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTermCondition } from 'src/user-term-condition/entities/userTermCondition.entity';
import { UserTermConditionService } from 'src/user-term-condition/user-term-condition.service';
import { Repository } from 'typeorm';
import { TermCondition } from './entities/termCondition.entity';

@Injectable()
export class TermConditionService {
  constructor(
    @InjectRepository(TermCondition)
    private termConditionRepository: Repository<TermCondition>,
    private userTermConditionService: UserTermConditionService,
  ) {}

  async updateTermCondition(newS3Url: string): Promise<TermCondition> {
    const newTermCondition = this.termConditionRepository.create({
      s3Url: newS3Url,
      status: true,
      createDate: new Date().toDateString(),
      updateDate: new Date().toDateString(),
      deleteDate: new Date().toDateString(),
    });
    const activeTermCondition = await this.termConditionRepository
      .createQueryBuilder('termCondition')
      .select('termCondition')
      .where('termCondition.status = true')
      .getOne();
    if (activeTermCondition) {
      activeTermCondition.status = false;
      activeTermCondition.updateDate = new Date().toDateString();
      this.termConditionRepository.save(activeTermCondition);
    }
    return this.termConditionRepository.save(newTermCondition);
  }

  async getTermConditionStatusActive(): Promise<TermCondition> {
    return await this.termConditionRepository
      .createQueryBuilder('termCondition')
      .select('termCondition')
      .where('termCondition.status = true')
      .getOne();
  }

  async acceptTermCondition(
    termConditionId: number,
    userId: number,
  ): Promise<UserTermCondition> {
    return this.userTermConditionService.createUserTermCondition(
      termConditionId,
      userId,
    );
  }
}
