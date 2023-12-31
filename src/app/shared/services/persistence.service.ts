import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  set(key: string, data: any) {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  }
  remove(key: string) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  }
  get(key: string) {
    try {
      const localStorageResult = window.localStorage.getItem(key);
      if (!localStorageResult) {
        return null;
      }
      const result = JSON.parse(localStorageResult);
      return result;
    } catch (e) {
      return null;
    }
  }
}
