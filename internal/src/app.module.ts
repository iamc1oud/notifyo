import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateModule } from './templates/template.module';

@Module({
  imports: [
    // DB Module
    MongooseModule.forRoot(
      'mongodb+srv://famstar:famstar123@famstar-dev-cluster.9uxzl.mongodb.net/notifyo?retryWrites=true&w=majority',
    ),
    TemplateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
