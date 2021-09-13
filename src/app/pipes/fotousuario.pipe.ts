import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url = environment.URL_BASE;

@Pipe({
  name: 'fotousuario'
})
export class FotoUsuarioPipe implements PipeTransform {

  transform(imagen: string): string {
    if(imagen){
      if(imagen != "no-image.jpg"){
        return imagen;
      } 
      else{
        return `${base_url}/usuarios/foto?foto_nombre=no-image.jpg`;
      } 
        
  }else{
      return `${base_url}/usuarios/foto?foto_nombre=no-image.jpg`;
  }
  }

}