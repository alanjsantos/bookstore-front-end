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

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: '' 
    }
  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //passando o id da URL para o ID categoria que foi instaciada
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  //busncando usuario por ID
  findById(): void {
   this.service.findById(this.categoria.id!).subscribe((resposta) => {
     this.categoria.nome = resposta.nome;
     this.categoria.descricao = resposta.descricao
     
   })
  }

  delete(): void {
    this.service.delete(this.categoria.id!).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.messagem('Categoria EXCLUÍDA com SUCESSO!')
    })
  }
 
  cancel(){
    this.router.navigate(['categorias'])
  }

}
