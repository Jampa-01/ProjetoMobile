import { Component, OnInit } from '@angular/core';
import { FakestoreapiService } from '../serviços/fakestoreapi.service'; // gerado automaticamente após finalizar o import no construtor, permite o serviço rodar nessa página


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
  standalone: false,
})
export class ListaPage implements OnInit {
  
  constructor(protected produto: FakestoreapiService) { }  //import do servico criado --> Só criar a 'variável' e definir com o nome do service

  produtos: any[] = []                          // fazer a lista vazia

  // iniciando a tela, o codigo comunica com o serviço usando o metodo para trazer os dados e botar na lista
  ngOnInit() {
    this.produto.getProdutos().subscribe(
      (dados: any)=>{
        console.log(dados)
        this.produtos = dados
        console.log(this.produtos)
      }
    );
  }

}
