import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly GENERAL = '/business/user';

  constructor(private http: HttpClient, private router: Router) {
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.GENERAL}/all`);
  }
}
