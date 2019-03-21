import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../http.service';
import { User } from '../../user';
import { NgForm } from '@angular/forms';
//import { userInfo } from 'os';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user: User;
  submitted: boolean;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  isValidUser(form: NgForm) {
    let username = form.controls['username'].value;
    let password = form.controls['password'].value;
    this.httpService.getUser(username, password).subscribe(user => this.user = user);
    this.submitted = true;
  }

}
