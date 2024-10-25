import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TunnelComponent } from './components/tunnel/tunnel.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { ButtomMapComponent } from './components/buttom-map/buttom-map.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'alfa', component: HomeComponent },
    { path: 'cuarto', component: HomeComponent },
    { path: 'tren', component: HomeComponent },
    { path: 'depuracion', component: HomeComponent },
    { path: 'cultivo', component: HomeComponent },
    { path: 'mar', component: HomeComponent },
    { path: 'audio', component: AudioPlayerComponent },
    { path: 'map', component: ButtomMapComponent },
    { path: 'asd', component: ButtomMapComponent}
];
