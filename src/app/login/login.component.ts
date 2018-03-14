import { Component, OnInit , Input } from '@angular/core';
import {User} from '../../assets/User';
import { Router} from '@angular/router'; //导入router服务
import { HttpService } from '../http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private httpService: HttpService) { }
  ngOnInit() {

  }

  login(user) {
    this.router.navigateByUrl('users');
  }
}
