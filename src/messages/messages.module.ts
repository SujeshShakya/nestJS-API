import { Module, HttpService, HttpModule } from '@nestjs/common';
import { MessagesResolver } from 'src/messages/messages.resolver';



@Module({
    imports: [HttpModule],
    providers: [MessagesResolver],
exports: [MessagesResolver],
})
export class MessagesModule {}
