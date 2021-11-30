import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../core/service/user.service';
import {UserModel} from '../../../core/model/User.model';
import {UserDetailsService} from '../../../core/service/user-details.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {

  users: UserModel[];

  constructor(
    private userService: UserService,
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void{
    this.userService.getUsers().subscribe(res => {
      this.users = res;
      console.log(res);
    });
  }



}
