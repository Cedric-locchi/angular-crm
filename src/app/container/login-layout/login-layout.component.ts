import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProfilsService} from '../../services/users/profils.service';
import {MessageService} from '../../services/message/message.service';
import {interval, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  login: FormControl;
  password: FormControl;
  remember: FormControl;

  subscription: Subscription;

  message: string;
  display: boolean;

  constructor(private profilService: ProfilsService,
              private router: Router,
              private messageService: MessageService) {

    this.subscription = interval(1000).subscribe(() => {
      this.messageService.getMessage().subscribe((message) => {
        if (message) {
          this.message = message.text;
          this.display = message.display;

          if (message.valid === true) {
            this.router.navigate(['/admin']);
          }

        }
      });
    });

  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  connect() {
    this.profilService.getUserProfil(this.loginForm.value);
  }

  private buildForm() {
    this.login = new FormControl('', []);
    this.password = new FormControl('', []);
    this.remember = new FormControl(false, []);

    this.loginForm = new FormGroup({
      login: this.login,
      password: this.password,
      remember: this.remember
    });
  }

}
