import {Query, Resolver} from '@nestjs/graphql';
import { HttpService } from "@nestjs/common";

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Resolver()
export class MessagesResolver {
    messagesThatReallyShouldbeInDb = [{
        id: 0, description: 'The message'
    },
{
    id:1, description: 'The second message'
}];

constructor (private http: HttpService){
    
}

    @Query('messages')
    getMessages(){
        return this.http.get('https://www.tronalddump.io/tag').pipe(
            map(response => response.data._embedded.tag)
          );
    }
}