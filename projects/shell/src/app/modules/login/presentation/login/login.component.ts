import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../data/services/auth.service';
import { StorageService } from '../../../../_services/storage.service';
//import * as $ from 'jquery';
declare var $:any;
//import * as $ from 'jquery';
//import * as $ from 'jquery/dist/jquery.min.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private _authService: AuthService, private _storageService: StorageService) { }

  ngOnInit(): void {


    //jQuery(".form-control").style="display: none;";
    if (this._storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this._storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    $('#username').val("sss");
    const { username, password } = this.form;

    this._authService.login(username, password).subscribe({
      next: data => {
        this._storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this._storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
