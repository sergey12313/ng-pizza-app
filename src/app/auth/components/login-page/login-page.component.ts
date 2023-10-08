import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Nullable} from 'src/app/shared/types/utils';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor(private formBuilder: FormBuilder, readonly store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.formBuilder.nonNullable.group({
      email: 'sdf@ya.ru',
      password: '12345678',
    });
  }
  onSubmit(): void {
    console.log(this.form.value);
  }
}
