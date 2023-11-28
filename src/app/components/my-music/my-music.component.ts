import { AfterViewInit, Component } from '@angular/core';
import { Music } from 'src/app/interfaces/music';
import { MusicAdd } from 'src/app/interfaces/music-add';
import { MymusicService } from 'src/app/services/mymusic.service';
import WaveSurfer from 'wavesurfer.js';
@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.scss']
})
export class MyMusicComponent {

  constructor(private myMusicService: MymusicService){
    this.myMusicService.getMusicDetailsListObs().subscribe(data =>{
      this.musicDeatils = data
      console.log(this.musicDeatils)
    })
    this.myMusicService.getsongsListObs().subscribe(data =>{
      this.music = data
      console.log(this.music)
    })
  }

  music: Music[] = []
  
  musicDeatils: MusicAdd[] = []
 
  


}
