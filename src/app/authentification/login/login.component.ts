import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  error!:string|null;
  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData> = this.authService.login(email, password);
    this.isLoading = true;

    authObs.subscribe({
      next: () => { this.router.navigate(['/recetas']), this.isLoading = false },
      error: (errorMessage) => {
        this.error = errorMessage
        this.isLoading = false;
      }
    })


    form.reset();

  }

  onHandleError() {
    this.error = null;
  }
}
