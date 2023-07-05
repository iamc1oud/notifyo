import { Module } from '@nestjs/common';
import { MailService } from './template.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Template, TemplateSchema } from './schemas/template.schema';
import { MailController } from './template.controller';

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
export class TemplateModule {}
