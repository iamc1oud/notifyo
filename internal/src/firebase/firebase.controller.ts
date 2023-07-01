import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreatePushNotification } from './dto/notification.dto';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
@ApiTags('Firebase Cloud Messaging')
export class FirebaseController {

    constructor(private readonly firebaseService: FirebaseService) {}

    @Post('/push-notification')
    @ApiOperation({description: "Send fcm notification", summary: "Send push notification"})
    @ApiBody({type: CreatePushNotification})
    create(@Body() body: CreatePushNotification) {
        return this.firebaseService.addNewPushNotification(body);
    }
}
