import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TermConditionService } from './termCondition.service';
import { UpdateTermConditionDto } from './dto/update-termCondition.dto';
import { TermCondition } from './entities/termCondition.entity';
import { UserTermCondition } from 'src/user-term-condition/entities/userTermCondition.entity';
import { AcceptTermConditionDto } from './dto/accept-termCondition.dto';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { SuccessResponse } from 'src/Response/successResponse';

@ApiTags('termCondition')
@UseFilters(new HttpExceptionFilter())
@Controller('termCondition')
export class TermConditionController {
  constructor(private termConditionService: TermConditionService) {}

  @ApiCreatedResponse({ type: TermCondition })
  @ApiBadRequestResponse()
  @Post()
  async updateTermCondition(
    @Body() { s3Url }: UpdateTermConditionDto,
  ): Promise<SuccessResponse> {
    const updatedTermCondition =
      await this.termConditionService.updateTermCondition(s3Url);
    return new SuccessResponse(1000, 'Success', updatedTermCondition);
  }

  @ApiOkResponse({ type: TermCondition })
  @Get()
  async getTermConditionStatusActive(): Promise<SuccessResponse> {
    const termConditionStatusActive =
      await this.termConditionService.getTermConditionStatusActive();
    if (!termConditionStatusActive) {
      throw new NotFoundException({
        code: 2000,
        message: 'Cannot find active term and condition',
      });
    }
    return new SuccessResponse(1000, 'Success', termConditionStatusActive);
  }

  @ApiCreatedResponse({ type: UserTermCondition })
  @ApiBadRequestResponse()
  @Post('/acceptTermCondition')
  async acceptTermCondition(
    @Body() { termConditionId, userId }: AcceptTermConditionDto,
  ): Promise<SuccessResponse> {
    const acceptedTermCondition =
      await this.termConditionService.acceptTermCondition(
        termConditionId,
        userId,
      );
    return new SuccessResponse(1000, 'Success', acceptedTermCondition);
  }
}
