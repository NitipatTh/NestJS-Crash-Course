import { Test, TestingModule } from '@nestjs/testing';
import { TermConditionController } from './termCondition.controller';
import { UserTermConditionModule } from 'src/user-term-condition/user-term-condition.module';

describe('TermConditionController', () => {
  let controller: TermConditionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TermConditionController],
      imports: [UserTermConditionModule],
    }).compile();

    controller = module.get<TermConditionController>(TermConditionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
