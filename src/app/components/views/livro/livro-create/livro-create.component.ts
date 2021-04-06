import { Livro } from './../livro.models';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  //objetos instaciados para realizar as validacoes dos campos diretamente no front end.
  titulo = new FormControl('', [Validators.minLength(3)])
  nomeAutor = new FormControl('', [Validators.minLength(3)])
  texto = new FormControl('', [Validators.minLength(10)])

  //objeto livros instanciado.
  livros: Livro = {
    nomeAutor: '',
    titulo: '',
    texto: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  //Realizando VALIDACAO diretamente no FRON-END
  getMessages() {
    if (this.titulo.invalid) {
      return 'O campo TÍTULO deve conter entre 3 e 100 caracteres.'
    }

    if (this.nomeAutor.invalid) {
      return 'O campo AUTOR deve conter entre 3 e 100 caracteres.'
    }

    if (this.texto.invalid) {
      return 'O campo TEXTO deve conter entre 10 e 2.000.000 caracteres.'
    }
    return false;
  }

}
