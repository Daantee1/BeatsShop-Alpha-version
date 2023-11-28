import { Component,  Input, AfterViewInit } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
@Component({
  selector: 'app-beats-player-profile',
  templateUrl: './beats-player-profile.component.html',
  styleUrls: ['./beats-player-profile.component.scss']
})
export class BeatsPlayerProfileComponent {
  @Input() audioPath?: string
  @Input() title?: string
  @Input() priceB?: number
  @Input() priceE?: number
  @Input() bpm?: number
  @Input() key?: string
  @Input() picture?: string


  wavesurfer!: WaveSurfer;
  isPlaying: boolean = false
  isMute: boolean = false
  isLoggedIn: boolean = false;
  licenseType: string = '';
  price?: any = ''
  licenseSelected: boolean = false

  ngAfterViewInit() {
   
    this.wavesurfer = WaveSurfer.create({
      container:  `#waveform-${this.title}`,
      waveColor: '#dde5ec',
      progressColor: '#03cebf',
      height: 80,
      barWidth: 4,
      hideScrollbar: true,
      barRadius: 4
    });
    
    if (this.audioPath) {
      this.wavesurfer.load(this.audioPath);
      
    } else {
      console.error('Brak ścieżki do pliku audio.');
    }
  }


handleBuyClick() {
    if (this.isLoggedIn) {
      
    } else {
      window.location.href = '/LoginPage'; 
    }
  }



  pausePlaying(){
    this.isPlaying = false
    this.wavesurfer.playPause()
  }
  startPlaying(){
    this.isPlaying =true
    this.wavesurfer.playPause()
  }
  stopPlaying(){
    this.isPlaying =false
    this.wavesurfer.stop()
  }

  soundOn(){
    this.isMute = true
    this.wavesurfer.setMuted(true)
  }
  soundOff(){
    this.isMute = false
    this.wavesurfer.setMuted(false)
  }

  onLicenseTypeChange(){
    if(this.licenseType === 'Basic License'){
      this.licenseSelected = true
      this.price = this.priceB
    }else if (this.licenseType === 'Exclusive License'){
      this.licenseSelected = true
      this.price = this.priceE
    } 
      
    
  }
}
