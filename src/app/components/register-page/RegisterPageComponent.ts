import { Component } from '@angular/core';
import { AccountDetails } from 'src/app/interfaces/account-details';
import { AccountsDataService } from 'src/app/services/accounts-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  showSnackBar: boolean = true
  passwordConfirm: string = '';
  passwordDoNotMatch: boolean = false;
  loginAndEmailFailed: boolean = false;

  constructor(private accountsData: AccountsDataService, private router: Router) { }

  accountDetails: AccountDetails = {
    login: '',
    email: '',
    password: ''
  };

  async register() {
    const emailCheck = this.accountsData.isEmailUnique(this.accountDetails.email)
    const loginCheck = this.accountsData.isLoginUnique(this.accountDetails.login)
    if(!emailCheck || !loginCheck){
      console.log('Email albo login jest juz w bazie')
      this.loginAndEmailFailed = true
    } else{
      this.loginAndEmailFailed = false;
      this.accountsData.addToAccountsDataAll(this.accountDetails);
      this.showSnackBar = false
      setTimeout(()=> {
        this.router.navigate(['/LoginPage']);
      }, 3000)
    }
    
   
    
  }

  
  checkPassword() {
    this.passwordDoNotMatch = this.passwordConfirm !== this.accountDetails.password;
  }

  onLoginOrEmailChange(){
    this.loginAndEmailFailed = false
  }

   
}
