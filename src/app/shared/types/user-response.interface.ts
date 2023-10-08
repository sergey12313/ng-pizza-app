import {Nullable} from './utils';

export interface UserResponseInterface {
  id: number;
  email: string;
  address: Nullable<string>;
  name: string;
  restoreToken: Nullable<string>;
  phone: Nullable<string>;
}
