import { LivroService } from './livro.service';
import { ActivatedRoute } from '@angular/router';
import { Livro } from './../livro.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];
  
  id_cat: String = ''

  //Array de livros.
  livros: Livro[] = [];

  constructor( private service: LivroService, private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.id_cat =  this.route.snapshot.paramMap.get('id_cat')!
    this.findAll()
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe(resposta => {
      this.livros = resposta      
    })
  }

 

  

}
