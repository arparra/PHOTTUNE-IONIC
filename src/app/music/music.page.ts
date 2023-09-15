import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  audio: any;
  cancionActual: string | null = null;
  isCancionActualPlaying: boolean = false;
  canciones: string[] = [
    '../../assets/Music/DAMM YANKEES. Come Again.mp3',
    '../../assets/Music/Avalon.mp3',
    '../../assets/Music/AVENGED SEVENFOLD. Buried Alive.mp3',
    '../../assets/Music/Call My Bluff.mp3',
    '../../assets/Music/DAMN YANKEES. High Enoug.mp3',
    '../../assets/Music/Eye Of The Storm.mp3',
    '../../assets/Music/FIREHOUSE. When I Look Into Your Eyes.mp3',
    '../../assets/Music/In these arms.mp3'
  ];
  nombresCanciones: string[] = [
    'Come Again',
    'Avalon',
    'Buried Alive',
    'Call My Bluff',
    'High Enough',
    'Eye Of The Storm',
    'When I Look Into Your Eyes',
    'In these arms'
  ];

  stateCanciones: { [key: string]: boolean } = {};

  constructor(private router: Router) { }

  playMusic(cancion: string) {
    if (this.cancionActual !== cancion) {
      this.pauseMusic();
      this.cancionActual = cancion;
      this.isCancionActualPlaying = false;
    }
    if (!this.isCancionActualPlaying) {
      this.audio = new Audio();
      this.audio.src = cancion;
      this.audio.load();
      this.audio.play();
      this.isCancionActualPlaying = true;
    } else {
      this.pauseMusic();
    }
  }

  pauseMusic() {
    if (this.audio) {
      this.audio.pause();
      this.isCancionActualPlaying = false;
    }
  }

  toggleMusic(cancion: string) {
    if (this.stateCanciones[cancion]) {
      this.pauseMusic();
    } else {
      this.playMusic(cancion);
    }

    this.canciones.forEach(c => {
      if (c !== cancion) {
        this.stateCanciones[c] = false;
      }
    });

    this.stateCanciones[cancion] = !this.stateCanciones[cancion];
  }

  redirigirAHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }
}
