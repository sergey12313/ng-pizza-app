import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {registerAction} from 'src/app/shared/store/auth/actions/register.action';
import {
  authErrorsSelector,
  authIsErrorFoundSelector,
  authIsSubmittedSelector,
} from 'src/app/shared/store/auth/auth.selectors';
import {RegisterRequestInterface} from 'src/app/shared/types/register-request.interface';
import {Nullable} from 'src/app/shared/types/utils';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  form!: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    name: FormControl<string>;
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
      email: ['sdf@ya.ru', [Validators.required, Validators.email]],
      password: ['12345678', Validators.required],
      name: ['sergey razuvaev', [Validators.required, Validators.minLength(3)]],
    });
  }
  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const request = this.form.value as RegisterRequestInterface;
      this.store.dispatch(registerAction({request}));
    }
  }
}
