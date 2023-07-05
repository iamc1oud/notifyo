import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    // DB Module
    MongooseModule.forRoot(
      'mongodb+srv://famstar:famstar123@famstar-dev-cluster.9uxzl.mongodb.net/notifyo?retryWrites=true&w=majority',
    ),
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
