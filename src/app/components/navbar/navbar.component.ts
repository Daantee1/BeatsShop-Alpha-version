import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private auth: AuthService){
    this.auth.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn; 
    })
  }

  isLoggedIn: boolean = false;
 
  logout(){
    this.auth.logout()
  }
}
