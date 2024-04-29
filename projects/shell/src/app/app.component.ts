import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './_services/storage.service';
import { AuthService } from './modules/login/data/services/auth.service';
import { EventBusService } from './_shared/services/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private _storageService: StorageService,
    private _authService: AuthService,
    private _eventBusService: EventBusService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this._storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this._storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.eventBusSub = this._eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this._authService.logout().subscribe({
      next: res => {
        console.log(res);
        this._storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
