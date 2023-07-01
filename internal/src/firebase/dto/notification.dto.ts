import { ApiProperty } from "@nestjs/swagger";

export class CreatePushNotification {
    @ApiProperty()
    title: String;
    
    @ApiProperty()
    message: String;
}