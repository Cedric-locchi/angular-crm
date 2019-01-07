import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<any>();

  sendMessage(message: any) {
    this.subject.next({text: message.text, display: message.display, valid: message.valid});
  }

  clearMessage() {
    this.subject.next({display: false});
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
