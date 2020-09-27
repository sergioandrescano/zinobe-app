import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output() public login = new EventEmitter();
  @Output() public create = new EventEmitter<User>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [{ value: null, disabled: false }, [Validators.required]],
      email: [{ value: null, disabled: false }, [Validators.required, Validators.email]],
      username: [{ value: null, disabled: false }, [Validators.required]],
      password: [{ value: null, disabled: false }, [Validators.required]],
      documentNumber: [{ value: null, disabled: false }, [Validators.required]]
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
