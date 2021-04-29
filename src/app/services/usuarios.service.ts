import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRegisterForm } from '../interfaces/register-form.interface';

const base_url = environment.URL_BASE

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
    ) { }
    
  crearUsuario(dataForm: any){
    console.log('CREANDO USUARIO!!!!!');
    delete dataForm.clave2;

    console.log(dataForm);
    
    return this.http.post(`${base_url}/usuarios`, dataForm);
    
  }
}
