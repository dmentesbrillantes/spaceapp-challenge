import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importar animaciones
import { MatButtonModule } from '@angular/material/button';  // Importar botón de Angular Material
import { MatIconModule } from '@angular/material/icon'; 



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,  // Agregar módulo de animaciones
    MatButtonModule,          // Agregar módulo de botones
    MatIconModule             // Agregar módulo de íconos
  ]
})
export class HomeModule { }
