import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TemplateDocument = HydratedDocument<Template>;

@Schema({ timestamps: true })
export class Template {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  content: string;

  @Prop({
    type: String,
    required: true,
    enum: ['email', 'whatsapp', 'message'],
  })
  type: string;
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
