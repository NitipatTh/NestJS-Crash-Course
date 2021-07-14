import { Test, TestingModule } from '@nestjs/testing';
import { TermConditionService } from './termCondition.service';
import { UserTermConditionModule } from 'src/user-term-condition/user-term-condition.module';

describe('TermConditionService', () => {
  let service: TermConditionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TermConditionService],
      imports: [UserTermConditionModule],
    }).compile();

    service = module.get<TermConditionService>(TermConditionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
