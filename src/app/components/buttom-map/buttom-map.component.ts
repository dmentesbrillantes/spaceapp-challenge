import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog,  MatDialogTitle,
  MatDialogContent, 
  MatDialogModule,
  MatDialogRef} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-buttom-map',
  standalone: true,
  imports: [FormsModule,MatIconModule],
  templateUrl: './buttom-map.component.html',
  styleUrl: './buttom-map.component.css'
})

export class ButtomMapComponent {
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogMapComponent, {
        height: '600px',
        width: '1000px',
        maxWidth: 'none'
    });
  }

}



@Component({
  selector: 'dialog.map',
  templateUrl: './dialog-map.component.html',
  standalone: true,
  imports: [MatButtonModule,MatDialogContent,MatDialogTitle,CommonModule,MatDialogModule],
  styleUrl: './buttom-map.component.css'
})

export class DialogMapComponent {
  isDomo:boolean=true;
  fondoUrl:string='';
  xDeCero:string='';
  yDeCero:string='';
  descripcion1:string='';
  descripcion2:string='Zona Habitacional';
  hiddenboton2:boolean=true;
  readonly dialogRef = inject(MatDialogRef<DialogMapComponent>);
  data = inject(MAT_DIALOG_DATA);
  constructor(private router: Router) {}

  select(event:string){
    switch(event){
      case "invernaculo1":
        this.fondoUrl='invernaculo1.png'
        this.descripcion1='Invernaculo 1'
        this.xDeCero='50';
        this.yDeCero='30';
      break;
      case "alfa":
        this.fondoUrl='domo-alfa.png';
        this.hiddenboton2=false;
        this.descripcion1='Zona Comun'
        this.xDeCero='40';
        this.yDeCero='15';
      break;
      case "aduana":
        this.fondoUrl='domo-aduana.png';
        this.descripcion1='Aduana'
        this.xDeCero='40';
        this.yDeCero='20';
      break;
      case "depuracion":
        this.fondoUrl='depuracion.png'
        this.descripcion1='Depuracion'
        this.xDeCero='50';
        this.yDeCero='30';
      break;
      case "invernaculo2":
        this.fondoUrl='invernaculo.png'
        this.descripcion1='Invernaculo 2'
        this.xDeCero='50';
        this.yDeCero='30';
      break;
      case "mar":
        this.fondoUrl='Domo-Mar.png'
        this.descripcion1='Domo Marino'
        this.xDeCero='50';
        this.yDeCero='40';
      break;
      case "tren":
        this.dialogRef.close()
          this.router.navigate(["/tren"]);
      break;
    }
    this.isDomo=false;

  }

  route(index:string){

    switch(this.fondoUrl){
      case "domo-aduana.png":
        console.log("llego")
      this.dialogRef.close()
        this.router.navigate(["/home"]);
      break;
      case "invernaculo.png":
        console.log("llego")
        this.dialogRef.close()
          this.router.navigate(["/cultivo"]);
      break;
      case "invernaculo1.png":
        console.log("llego")
        this.dialogRef.close()
          this.router.navigate(["/cultivo1"]);
      break;
      case "domo-alfa.png":
          if(index=='0'){
            console.log("llego")
            this.dialogRef.close()
              this.router.navigate(["/alfa"]);
          }else{
            this.dialogRef.close()
            this.router.navigate(["/cuarto"]);
          }
      break;
      case "Domo-Mar.png":
        this.dialogRef.close()
          this.router.navigate(["/mar"]);
      break;
      case "depuracion.png":
        this.dialogRef.close()
          this.router.navigate(["/depuracion"]);
      break;
      case "tren":
        this.fondoUrl='Domo-Mar.png'
        this.descripcion1='Domo Marino'
        this.xDeCero='50';
        this.yDeCero='40';
      break;


    }

  }
  }

