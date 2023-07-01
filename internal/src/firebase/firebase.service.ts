import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { CreatePushNotification } from './dto/notification.dto';

@Injectable()
export class FirebaseService {
    constructor(private eventEmitter: EventEmitter2) {

    }

    addNewPushNotification(args: CreatePushNotification) {
        return this.eventEmitter.emit('create-push-notification', args) ? true : false;
    }

    @OnEvent('create-push-notification', { async: true })
    handleCreatePushNotification(payload: CreatePushNotification) {
        console.log("Notification created: ", payload);
    }
}
