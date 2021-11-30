import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/service/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
  ) {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
  }

  home(): void {
    this.router.navigate(['mahabbat/home']);
  }

  register(): void {
    this.router.navigate(['auth/signup']);
  }

  loginUser(): void{
    this.authService.login(this.form.getRawValue()).subscribe(res => {
      if (res != null) {
        console.log(res);
      }
    }, error => {
      alert(error.error);
    });
  }

}
