import { Categoria } from './../../views/categoria/categoria.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  //buscando todas as categorias
  findAll():Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`

    return this.http.get<Categoria[]>(url)
  }

  findById(id: String):Observable<Categoria> {
    const url =`${this.baseUrl}/categorias/${id}`

    return this.http.get<Categoria>(url)
  } 

  //criando categoria
  create(categoria: Categoria):Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`

    return this.http.post<Categoria>(url, categoria);
  }

  delete(id: string):Observable<void>{
    const url = `${this.baseUrl}/categorias/${id}`

    return this.http.delete<void>(url);
  }

  update(cat: Categoria):Observable<void> {
    const url = `${this.baseUrl}/categorias/${cat.id}`

    return this.http.put<void>(url, cat)
  }

  messagem(string: String): void {
    this._snack.open(`${string}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4500
    })
  }


}
