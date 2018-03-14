import { Injectable } from '@angular/core';
import {User} from '../assets/User';
@Injectable()
export class HttpService {
  //mock ajax request
  userList: Array<User>= [
    {
      id: 1,
      name: 'scott',
      password: '123'
    },
    {
      id: 2,
      name: 'zhou',
      password: '345'
    }
  ];
  user: User = new User();
  constructor() { }

  getUsers(): Array<User> {
    return this.userList;
  }
  getUserById(id: number ) {
     this.userList.forEach((val) => {
      if ( val.id === id ) {
        this.user = val;
      }
    });

    return this.user ;
  }
}
