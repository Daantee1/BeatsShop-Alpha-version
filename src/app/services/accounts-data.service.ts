import { Injectable } from '@angular/core';
import { AccountDetails } from '../interfaces/account-details';
import { BehaviorSubject, Observable } from 'rxjs';
import * as bcrypt from 'bcryptjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AccountsDataService {

  constructor(private auth: AuthService) {
    const storedAccounts = localStorage.getItem(this.localStorageKey)
    if(storedAccounts){
      this.accountsDataAll = JSON.parse(storedAccounts)
      this.accountsDataAllObs.next(this.accountsDataAll);
    }

   }

  private accountsDataAll: AccountDetails[] = []
  private accountsDataAllObs = new BehaviorSubject<AccountDetails[]>(this.accountsDataAll);
  localStorageKey = 'accounts'

  addToAccountsDataAll(accountDetails: AccountDetails){

    if(this.isLoginUnique(accountDetails.login) && this.isEmailUnique(accountDetails.email)){

      const hashedPassword = bcrypt.hashSync(accountDetails.password, 10)

      const accountWithHashedPassword: AccountDetails = {
      login: accountDetails.login,
      email: accountDetails.email,
      password: hashedPassword,
      
    }

      this.accountsDataAll.push(accountWithHashedPassword)
      this.accountsDataAllObs.next(this.accountsDataAll)
      this.saveToLocalStorage(this.accountsDataAll);
      
    }
    else{
      console.log('Nie udało się zarejestrowac!')
    }

  }

 
 
  isLoginUnique(login: string) {
    const loginLowerCase = login.toLocaleLowerCase()
    return !this.accountsDataAll.some(account => account.login.toLocaleLowerCase() === loginLowerCase)
  }

  isEmailUnique(email: string) {
    const emailLowerCase = email.toLocaleLowerCase()
    return !this.accountsDataAll.some(account => account.email.toLocaleLowerCase() === emailLowerCase)
  }

  getAccountsDataAllObs(): Observable<AccountDetails[]>{
    return this.accountsDataAllObs.asObservable()
  }
 
  private saveToLocalStorage(accountsData: AccountDetails[]){
    localStorage.setItem(this.localStorageKey, JSON.stringify(accountsData))
  }
  
}
