import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Template, TemplateSchema } from './schemas/email-template.schema';
import { MailController } from './mail.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Template.name,
        schema: TemplateSchema,
      },
    ]),
  ],
  providers: [MailService],
  controllers: [MailController],
})
export class MailModule {}
