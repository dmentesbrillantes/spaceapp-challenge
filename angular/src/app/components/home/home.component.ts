import { Component, inject, OnInit,AfterViewInit,OnDestroy } from '@angular/core';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { ButtomMapComponent } from '../buttom-map/buttom-map.component';

export interface PeriodicElement {
  id: number;
  nombre: string;
  ruteo: string;
  imagen: string[];
  imgIndex:number;
  audio: string;
  flecha: flechas[];
}

export interface flechas {
  id: number;
  route: string;
  fLeft: string;
  fBot: string;
  hiden: boolean;
  rotacion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 0,
    nombre: 'Entrada',
    ruteo: '/home',
    imagen: ['superficie-marte1.jpg','superficie-marte2.jpeg','domo7.jpg,'],
    imgIndex: 0,
    audio: 'audio2.mp3',
    flecha: [
      {
        id: 0,
        route: '/hola',
        fLeft: '650px',
        fBot: '120px',
        hiden: false,
        rotacion: '0deg',
      },
    ],
  },
  {
    id: 1,
    nombre: 'Entrada',
    ruteo: '/alfa',
    imagen: ['alfa1.jpg','alfa2.jpg','alfa3.jpg','alfa4.jpg'],
    imgIndex: 0,
    audio: 'audio2.mp3',
    flecha: [
      {
        id: 0,
        route: '/tunel',
        fLeft: '670px',
        fBot: '150px',
        hiden: false,
        rotacion: '0deg',
      },
      {
        id: 1,
        route: '/home',
        fLeft: '670px',
        fBot: '20px',
        hiden: false,
        rotacion: '180deg',
      },
    ],
  },
  {
    id: 2,
    nombre: 'Entrada',
    ruteo: '/tunel',
    imagen: ['tunel.jpg','',''],
    imgIndex:0,
    audio: 'audio.mp3',
    flecha: [
      {
        id: 0,
        route: '/tunel',
        fLeft: '1200px',
        fBot: '250px',
        hiden: true,
        rotacion: '90deg',
      },
      {
        id: 1,
        route: '/home',
        fLeft: '10px',
        fBot: '250px',
        hiden: true,
        rotacion: '270deg',
      },
    ],
  },
  {
    id: 3,
    nombre: 'Entrada',
    ruteo: '/depuracion',
    imagen: ['depuracion1.jpg','depuracion2.jpg','depuracion3.jpg'],
    imgIndex:0,
    audio: 'audio.mp3',
    flecha: [
      {
        id: 0,
        route: '/hola',
        fLeft: '75px',
        fBot: '250px',
        hiden: false,
        rotacion: '0deg',
      },
    ],
  },
  {
    id: 4,
    nombre: 'Entrada',
    ruteo: '/cultivo',
    imagen: ['cultivo.jpg','cultivo1.jpg','cultivo2.jpg'],
    imgIndex:0,
    audio: 'audio.mp3',
    flecha: [
      {
        id: 0,
        route: '/hola',
        fLeft: '75px',
        fBot: '250px',
        hiden: false,
        rotacion: '0deg',
      },
    ],
  },
  {
    id: 4,
    nombre: 'Entrada',
    ruteo: '/cuarto',
    imagen: ['cuarto.jpg','cuarto1.jpg','cuarto2.jpg'],
    imgIndex:0,
    audio: 'audio.mp3',
    flecha: [
      {
        id: 0,
        route: '/hola',
        fLeft: '75px',
        fBot: '250px',
        hiden: false,
        rotacion: '0deg',
      },
    ],
  },
  {
    id: 5,
    nombre: 'Entrada',
    ruteo: '/mar',
    imagen: ['mar10.jpg','mar2.jpg','mar3.jpg'],
    imgIndex:0,
    audio: 'audio.mp3',
    flecha: [
      {
        id: 0,
        route: '/hola',
        fLeft: '75px',
        fBot: '250px',
        hiden: false,
        rotacion: '0deg',
      },
    ],
  },
  {
    id: 6,
    nombre: 'Entrada',
    ruteo: '/tren',
    imagen: ['tren1.jpg','tren2.jpg','tren3.jpg'],
    imgIndex:0,
    audio: 'audio.mp3',
    flecha: [
      {
        id: 0,
        route: '/hola',
        fLeft: '75px',
        fBot: '250px',
        hiden: false,
        rotacion: '0deg',
      },
    ],
  },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AudioPlayerComponent, CommonModule,ButtomMapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit,AfterViewInit,OnDestroy {
  rutaActual: string = '';
  fondoUrl = '';
  fleft: string[] = [];
  fbot: string[] = [];
  hidden: boolean[] = [false, false, false];
  rotacion: string[] = ['0deg'];
  audioLink: string = '';
  paginaActual: any = [];


  //time
  time:number=0;
  interval:any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.rutaActual = this.router.url;
    console.log(this.rutaActual);
    switch (this.rutaActual) {
      case '/home':
        this.paginaActual = ELEMENT_DATA.filter(
          (x) => x.ruteo == this.rutaActual
        )[0];
        break;
      case '/alfa':
        this.paginaActual = ELEMENT_DATA.filter(
          (x) => x.ruteo == this.rutaActual
        )[0];
        break;
      case '/tunel':
        this.paginaActual = ELEMENT_DATA.filter(
          (x) => x.ruteo == this.rutaActual
        )[0];
        break;
      case '/depuracion':
        this.paginaActual = ELEMENT_DATA.filter(
          (x) => x.ruteo == this.rutaActual
        )[0];
      break;
      case '/cultivo':
        this.paginaActual = ELEMENT_DATA.filter(
          (x) => x.ruteo == this.rutaActual
        )[0];
      break;
      case '/cuarto':
        this.paginaActual = ELEMENT_DATA.filter(
          (x) => x.ruteo == this.rutaActual
        )[0];
      break;
      case '/mar':
        this.paginaActual = ELEMENT_DATA.filter(
          (x) => x.ruteo == this.rutaActual
        )[0];
      break;
      case '/tren':
        this.paginaActual = ELEMENT_DATA.filter(
          (x) => x.ruteo == this.rutaActual
        )[0];
      break;
      default:
        break;
    }
    this.audioLink = this.paginaActual.audio;
    this.fondoUrl = this.paginaActual.imagen[this.paginaActual.imgIndex];
    this.starTime();
    this.paginaActual.flecha.forEach(
      (
        element: {
          rotacion: string;
          hiden: boolean;
          fLeft: string;
          fBot: string;
        },
        index: number
      ) => {
        this.fleft[index] = element.fLeft;
        this.fbot[index] = element.fBot;
        this.hidden[index] = element.hiden;
        this.rotacion[index] = element.rotacion;
        
      }
    );
  }

  ngAfterViewInit(): void {
  }

  starTime(){
    this.interval=setInterval(()=>{
      console.log(this.paginaActual.imagen.length)
      if(this.paginaActual.imagen.length>this.paginaActual.imgIndex+1){
        this.paginaActual.imgIndex++;
      }else{
        this.paginaActual.imgIndex=0;
      }
      this.fondoUrl = this.paginaActual.imagen[this.paginaActual.imgIndex];
    },10000)
  }

  stopTimer(){
    clearInterval(this.interval)
  }

  resetTimer(){
    this.stopTimer();
    this.time=0;
  }


  flecha(id: number) {

    var flecha = this.paginaActual.flecha.filter(
      (x: { id: number }) => x.id == id
    )[0];
    console.log(flecha);
    this.router.navigate([flecha.route]);
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}
