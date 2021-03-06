import { Categoria } from './../categoria.model';
import { Router } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  //instanciando objeto categoria para ser salvo
  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.categoria).subscribe((resposta => {
      this.router.navigate(['categorias'])
      this.service.messagem('Cateogira criada com SUCESSO!');
    }), err => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.messagem(err.error.errors[i].msg)  
      }
    })
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }
}
