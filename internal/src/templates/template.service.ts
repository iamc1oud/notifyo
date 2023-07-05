import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Template, TemplateDocument } from './schemas/template.schema';
import { Model } from 'mongoose';

@Injectable()
export class MailService {
  constructor(
    @InjectModel(Template.name) private templateSchema: Model<TemplateDocument>,
  ) {}

  async createTemplate() {
    const newTemplate = new this.templateSchema();

    newTemplate.name = 'Welcome Email!';
    newTemplate.content =
      'Hello, {name}</br> How are you? Are you feeling good?';
    newTemplate.type = 'email';

    await newTemplate.save();
    return {
      message: 'Added new template',
    };
  }
}
