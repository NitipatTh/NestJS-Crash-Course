import { IsAlphanumeric, IsString } from 'class-validator';

export class SuccessResponse {
  constructor(code: number, message: string, data: any) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
  @IsAlphanumeric()
  code: number;

  @IsString()
  message: string;

  data?: any;
}
