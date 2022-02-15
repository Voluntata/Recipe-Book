import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentification/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Recipe-Book';

  constructor(private authServise: AuthService){

  }

  ngOnInit(): void {
    this.authServise.autoLogin();
  }
}
