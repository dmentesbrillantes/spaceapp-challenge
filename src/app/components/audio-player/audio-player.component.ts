import { Component,Input,input,OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';

export const audioroute=signal<string>('');

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [FormsModule,MatIconModule,MatSliderModule,MatCardModule],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.css'
})

export class AudioPlayerComponent implements OnInit {

  @Input() audioLink!: string;
  
  audio = new Audio();
  isPlaying = false;
  currentTime = 0;
  audioDuration = 0;


  ngOnInit(): void {
        this.audio.src = this.audioLink;  // Cambia a la ruta de tu archivo de audio
    this.audio.load();

    // Establecer la duración del audio cuando esté cargado
    this.audio.addEventListener('loadedmetadata', () => {
      this.audioDuration = this.audio.duration;
    });

    // Actualizar el tiempo actual mientras se reproduce
    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
    });
    //this.audio.play();
    //this.isPlaying=true;
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  seekAudio(event: any) {
    this.audio.currentTime = event.target.value;
  }

}
