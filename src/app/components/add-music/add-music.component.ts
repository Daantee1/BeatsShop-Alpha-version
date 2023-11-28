import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MusicAdd } from 'src/app/interfaces/music-add';
import { MymusicService } from 'src/app/services/mymusic.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent {

  constructor(private mymusic: MymusicService, private router: Router){
  }

  selectedFile: File | null = null;
  addedMusic = false
  loadingspinner: boolean = true
  musicDetails: MusicAdd = {
    name: '',
    key: undefined,
    bpm: undefined,
    exclusive: undefined,
    basic: undefined,
    picture: ''
  }

  handleFileInput(event: any): void {
   this.selectedFile = event?.target?.files[0]
   if(this.selectedFile){

   }
}

acceptFile(){
if(this.selectedFile){
  console.log('Zaakceptowany plik:', this.selectedFile.name);
  this.mymusic.addMusic(this.selectedFile)
  this.addedMusic = true
}
}

async addMusic(){
  this.mymusic.addMusicDetails(this.musicDetails)
  this.router.navigate(['/Home']);
  
}


}
