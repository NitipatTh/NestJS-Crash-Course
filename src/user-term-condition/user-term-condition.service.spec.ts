import { Test, TestingModule } from '@nestjs/testing';
import { UserTermConditionService } from './user-term-condition.service';

describe('UserTermConditionService', () => {
  let service: UserTermConditionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTermConditionService],
    }).compile();

    service = module.get<UserTermConditionService>(UserTermConditionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
