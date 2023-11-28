import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccountDetails } from '../interfaces/account-details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    
    const storedLogin = localStorage.getItem('login')
    if(storedLogin){
      this.loggedIn.next(JSON.parse(storedLogin))
    }
  }


  private loggedIn = new BehaviorSubject<boolean>(false);
  private localStorageKey = 'login'
  private loggedInUserDetails = new BehaviorSubject<AccountDetails | null>(null)


  login(userDetails: AccountDetails){
    this.loggedIn.next(true)
    this.saveToLocalStorage(true)
    this.setLoggedUserDetails(userDetails);
  }

  logout(){
    this.loggedIn.next(false)
    this.saveToLocalStorage(false)
    this.setLoggedUserDetails(null);
  }

  isLoggedIn(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  private saveToLocalStorage(status: boolean){
    localStorage.setItem(this.localStorageKey, JSON.stringify(status))
  }

 

  private setLoggedUserDetails(userDetails: AccountDetails | null) {
    this.loggedInUserDetails.next(userDetails);
  }
  
  getLoggedUserDetails(): Observable <AccountDetails | null > {
    return this.loggedInUserDetails.asObservable()
  }
}
