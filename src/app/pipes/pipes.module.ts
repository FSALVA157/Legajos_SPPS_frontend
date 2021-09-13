import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotopersonalPipe } from './fotopersonal.pipe';
import { FechasPipe } from './fechas.pipe';
import { PdfpersonalPipe } from './pdfpersonal.pipe';
import { FotoUsuarioPipe } from './fotousuario.pipe';



@NgModule({
  declarations: [
    FotoUsuarioPipe,
    FotopersonalPipe,
    FechasPipe,
    PdfpersonalPipe
  ],
  exports:[
    FotoUsuarioPipe,
    FotopersonalPipe,
    FechasPipe,
    PdfpersonalPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
