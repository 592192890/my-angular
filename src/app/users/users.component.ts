import { Component, OnInit } from '@angular/core';
import {User} from '../../assets/User';
import { Router} from '@angular/router'; //导入router服务
import { HttpService } from '../http.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array< User >= [
    {
      name: 'scott',
      password: ''
    },
    {
      name: 'zhou',
      password: ''
    }
  ];
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.users = this.httpService.getUsers();
  }
  goDetai(user) {
    // this.router.navigateByUrl('user-detail');
    this.router.navigate(['user-detail'], {
      queryParams: {
        id: user.id
      }
    });
  }
}
