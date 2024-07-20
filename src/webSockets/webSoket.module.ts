import { Module } from '@nestjs/common';
import { WebsocketGateway } from './webSocket.gateway';

@Module({
  providers: [WebsocketGateway],
})
export class WebSocketModule {}
