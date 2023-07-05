import { Controller, Post } from '@nestjs/common';
import { MailService } from './template.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('template')
@ApiTags('Templates')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('/')
  @ApiOperation({
    description:
      'You can write the template using ejs. Then the formatting will be done automatically when passing variables.',
    summary: 'Create new email template',
  })
  createTemplate() {
    return this.mailService.createTemplate();
  }
}
