import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ngPrimeModule } from '../../ngprime.module';
import { FormsModule } from '@angular/forms';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ngPrimeModule,
    FormsModule,
    ProgressSpinnerModule,
    PipesModule
  ],
  exports: [
    UsuariosComponent,
    PipesModule
  ]
})
export class UsuariosModule { }
