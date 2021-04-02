import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Categoria } from './../categorias/categoria.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //buscando todas as categorias
  findAll():Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`

    return this.http.get<Categoria[]>(url)
  }
}
