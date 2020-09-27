import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Input() public invalidLogged: boolean;
  @Output() public register = new EventEmitter();
  @Output() public create = new EventEmitter<User>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: LoginService) { }

  ngOnInit(): void {
    this.service.clearCustomerCreated();
    this.form = this.formBuilder.group({
      username: [{ value: null, disabled: false }, [Validators.required]],
      password: [{ value: null, disabled: false }, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    } else {
      this.validateEmptyFields();
    }
  }

  validateEmptyFields() {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
  }

  get input() { 
    return this.form.get('username'); }

}
