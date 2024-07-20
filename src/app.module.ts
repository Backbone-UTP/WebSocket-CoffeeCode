import { Module } from '@nestjs/common';
import { WebSocketModule } from './webSockets/webSoket.module';

@Module({
  imports: [WebSocketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
