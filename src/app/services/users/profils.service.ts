import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {MessageService} from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getUserProfil(user) {
    this.http.get(environment.url + 'profils/?username=' + user.login)
      .subscribe((res: Array<any>) => {
        if (res.length > 0 && res[0].username === user.login) {
          if (res[0].password === user.password) {
            const message = {
              text: 'connection faite',
              display: true,
              valid: true
            };
            this.messageService.sendMessage(message);
          } else {
            const message = {
              text: 'mot de passe non valide',
              display: true,
              valid: false
            };
            this.messageService.sendMessage(message);
          }
        } else {
          const message = {
            text: 'aucun profil ne correspond',
            display: true,
            valid: false
          };
          this.messageService.sendMessage(message);
        }
      });
  }

}
