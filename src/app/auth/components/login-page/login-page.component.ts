import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {loginAction} from 'src/app/shared/store/auth/actions/login.action';
import {
  authErrorsSelector,
  authIsErrorFoundSelector,
  authIsSubmittedSelector,
} from 'src/app/shared/store/auth/auth.selectors';
import {LoginRequestInterface} from 'src/app/shared/types/login-request.interface';
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

  isSubmitting$!: Observable<boolean>;
  validationErrors$!: Observable<Nullable<Array<string>>>;
  isErrorFound$!: Observable<boolean>;

  constructor(private formBuilder: FormBuilder, readonly store: Store) {}
  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.select(authIsSubmittedSelector);
    this.validationErrors$ = this.store.select(authErrorsSelector);
    this.isErrorFound$ = this.store.select(authIsErrorFoundSelector);
  }
  initializeForm(): void {
    this.form = this.formBuilder.nonNullable.group({
      email: ['test@test.org', [Validators.required, Validators.email]],
      password: ['12345678', Validators.required],
    });
  }
  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const request = this.form.value as LoginRequestInterface;
      this.store.dispatch(loginAction({request}));
    }
  }
}
