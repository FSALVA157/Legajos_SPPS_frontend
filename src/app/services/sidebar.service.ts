import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuAdmin: any [] = [
    {
      titulo: 'Personal',
      icono: 'fas fa-tachometer-alt',
      submenu:[
        {titulo: 'Cargar', url: 'upload'},
        // {titulo: 'Editar', url: 'edit'},
        {titulo: 'Listar', url: 'list'},
      ]
    },
    {
      titulo: 'Usuarios',
      icono: 'fa-solid fa-user',
      submenu:[
        {titulo: 'Mantenimiento', url: 'usuarios'}
            ]
    }
  ];

  menuUser: any [] = [
    {
      titulo: 'Personal',
      icono: 'fas fa-tachometer-alt',
      submenu:[
        {titulo: 'Cargar', url: 'upload'},
        // {titulo: 'Editar', url: 'edit'},
        {titulo: 'Listar', url: 'list'},
      ]
    }   
  ];

  constructor() { }
}
