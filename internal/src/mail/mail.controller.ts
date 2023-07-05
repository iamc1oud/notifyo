import { Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('/template')
  @ApiOperation({
    description: 'Create a new email template',
    summary: 'New email template',
  })
  createTemplate() {
    return this.mailService.createTemplate();
  }
}
