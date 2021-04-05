import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  //instaciando categoria 
  categoria: Categoria = { 
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router)  { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe(resposta => {
      this.categoria = resposta
      
    })
  }

  delete(): void {
    this.service.delete(this.categoria.id!).subscribe(resposta => {
      this.router.navigate(['categorias'])
      this.service.messagem('Categoria DELETADA com SUCESSO!')
    })
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }
}
