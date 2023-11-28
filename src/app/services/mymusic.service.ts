import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AccountDetails } from '../interfaces/account-details';
import { BehaviorSubject, Observable } from 'rxjs';
import { Music } from '../interfaces/music';
import { MusicAdd } from '../interfaces/music-add';

@Injectable({
  providedIn: 'root'
})
export class MymusicService {

  constructor(private auth: AuthService) { 
    this.auth.getLoggedUserDetails().subscribe(userDetails => {
      if (userDetails) {
        this.accountData = userDetails;
      } else {
        //alert('Bląd pobierania danych')
      }
    });
  }


  private musicList : Music[] = []
  private musicListObs = new BehaviorSubject <Music[]> (this.musicList)

  private musicDetailsList : MusicAdd[] = []
  private musicDetailsListObs = new BehaviorSubject <MusicAdd[]> (this.musicDetailsList)
  

  accountData: AccountDetails | null = null

  addMusic(music: File) {
    if (this.accountData) {
      const musicData: Music = {
        name: music.name,
        UploadDate: new Date()
      };
      if (!this.accountData.songs) {
        this.accountData.songs = {}; 
      }
  
      if (!this.accountData.songs.song) {
        this.accountData.songs.song = []; 
      }
  
      this.accountData.songs.song.push(musicData); 
      this.musicList.push(musicData);
      this.musicListObs.next(this.musicList);
      console.log(this.musicList);
    } else {
      alert('Błąd dodania');
    }
  }
  
  
  addMusicDetails(song: MusicAdd){
    this.musicDetailsList.push(song)
    this.musicDetailsListObs.next(this.musicDetailsList)
    console.log(this.musicDetailsList)
  }


  getMusicDetailsListObs() : Observable <MusicAdd[]>{
    return this.musicDetailsListObs.asObservable()
  }
  
  getsongsListObs(): Observable<Music[]>{
    return this.musicListObs.asObservable()
  }

}
