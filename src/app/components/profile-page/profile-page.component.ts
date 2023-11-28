import { Component, OnInit } from '@angular/core';
import { AccountDetails } from 'src/app/interfaces/account-details';
import { AccountsDataService } from 'src/app/services/accounts-data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private accountsDataService: AccountsDataService, private auth: AuthService){
   

    this.auth.getLoggedUserDetails().subscribe(userDetails => {
      if (userDetails) {
        this.accountData = [userDetails];
      } else {
        //alert('Blą pobierania danych')
      }
    });
  }
  ngOnInit(){
    this.changeContent('Dane profilu')
  }

  content : string = ''
  showMyProfile = false
  showMyMusic = false
  showMyOrder = false
  showAddMusic = false
  accountData: AccountDetails[] = []
  

  changeContent(newContent: string){
    if(newContent == 'Dane profilu'){

   
    this.content = 'Dane profilu'
    this.showMyProfile = true
    this.showMyMusic = false
    this.showMyOrder = false
    this.showAddMusic = false
  } else if (newContent == 'Moja muzyka'){
    this.content = 'Moja muzyka'
    this.showMyMusic = true
    this.showMyProfile = false
    this.showMyOrder = false
    this.showAddMusic = false
  }
    else if (newContent == 'Dodaj muzyke'){
      this.content = 'Dodaj muzyke'
      this.showAddMusic = true
      this.showMyMusic = false
      this.showMyProfile = false
      this.showMyOrder = false
  }else if (newContent == 'Moje zamówienia'){
    this.content = 'Moje zamówienia'
    this.showMyOrder = true
    this.showMyProfile = false
    this.showMyProfile = false
    this.showAddMusic = false
  }
  } 

}
