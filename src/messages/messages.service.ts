import { Injectable, HttpService } from "@nestjs/common";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class MessageService{
    constructor(private http: HttpService){

    }
    
    getCommenters(): any {
        return this.http.get('https://www.tronalddump.io/tag').pipe(
          map(response => response.data)
        );
      }
}