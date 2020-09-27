import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signUp = false;
  public isLoading$: Observable<boolean>;
  public invalidLogged$: Observable<boolean>;
  public customerCreated$: Observable<boolean>;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.service.clearState();
    this.isLoading$ = this.service.getIsLoading();
    this.invalidLogged$ = this.service.getInvalidLogged();
    this.customerCreated$ = this.service.getCustomerCreated();
  }

  authentication(user: User) {
    this.service.authentication(user);
  }

  createCustomer(user: User) {
    this.service.createCustomer(user);
  }

}
