import {BackendErrorInterface} from 'src/app/shared/types/backend-error.interface';
import {UserResponseInterface} from 'src/app/shared/types/user-response.interface';
import {Nullable} from 'src/app/shared/types/utils';

export interface AuthStateInterface {
  isLoading: boolean;
  isSubmitting: boolean;
  token: Nullable<string>;
  currentUser: Nullable<UserResponseInterface>;
  isLoggedIn: boolean;
  validationErrors: Nullable<Array<string>>;
}
