import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor( @Inject(PLATFORM_ID) private _platformId: Object,
  private _cookieService: CookieService) {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    if (isPlatformBrowser(this._platformId)) {
      // En el navegador, usa localStorage
console.log("isLoggedIn","window.sessionStorage")
const user = window.sessionStorage.getItem(USER_KEY);
      return !!window.sessionStorage.getItem('token');
    } else {
      // En el servidor, usa cookies
      return !!this._cookieService.get('token');
    }
    // const user = window.sessionStorage.getItem(USER_KEY);
    // if (user) {
    //   return true;
    // }

    // return false;
  }
}
