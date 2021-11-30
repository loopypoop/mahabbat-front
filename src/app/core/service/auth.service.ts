import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly GENERAL = '/auth';

  constructor(private http: HttpClient, private router: Router) {
  }

  register(form: FormGroup): Observable<any> {
    return this.http.post(`${this.GENERAL}/user`, form);
  }

  login(loginForm: FormGroup): Observable<any> {
    return this.http.post(`${this.GENERAL}/login`, loginForm);
  }
}
