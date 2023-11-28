import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AccountDetails } from 'src/app/interfaces/account-details';
import { AccountsDataService } from 'src/app/services/accounts-data.service';
import * as bcrypt from 'bcryptjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private accountDataService: AccountsDataService, private router: Router, private auth: AuthService){
    accountDataService.getAccountsDataAllObs().subscribe(data =>{
      this.usersData = data
      
    })
    
  }

    
    usersData: AccountDetails[] = []
    passwordNotMatch: boolean = false
    loginEmailNotMatch: boolean = false

    accountDetails: AccountDetails = {
      login: '',
      password: '',
      email: '',
     
    }

    async login(){
      this.passwordNotMatch = false;
      this.loginEmailNotMatch = false;

      const user = this.usersData.find(user =>
        user.email === this.accountDetails.email || user.login === this.accountDetails.login
      )

      if(user){
        const passwordMatch = await bcrypt.compare(this.accountDetails.password, user.password)

        if(passwordMatch){
          console.log('Udało się zalogować')
          this.auth.login(user)
          this.router.navigate(['/Home']);
          
        }else{
          this.passwordNotMatch = true
          console.log('Hasło jest błędne')
        }
          
        }else{
          console.log('Uzytkownik nie zostal znaleziony')
          this.loginEmailNotMatch = true
        }
    }
    resetErrors() {
      this.passwordNotMatch = false;
      this.loginEmailNotMatch = false;
    }
}
