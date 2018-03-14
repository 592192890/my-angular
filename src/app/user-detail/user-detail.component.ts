import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { User } from '../../assets/User';
import { Router, ActivatedRoute } from '@angular/router'; //导入router服务
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User= new User();
  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute ) {
  }

  ngOnInit() {
    const userId = this.activateRoute.snapshot.queryParams['id'];
    this.user = this.httpService.getUserById( parseInt( userId ) );
  }

}
