import { Module } from '@nestjs/common';
import { FirebaseModule } from './firebase/firebase.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    FirebaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
