import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  User: any = ['Admin', 'User'];
  error!: string | null;
  isLoading = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }
    const email = form.value.email;
    const password = form.value.password;
    const role = form.value.role;
    this.isLoading = true;
    let authObs: Observable<AuthResponseData> = this.authService.signup(email, password);
    console.log(authObs.subscribe())

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
