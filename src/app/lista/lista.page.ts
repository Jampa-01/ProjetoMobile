import { Component, OnInit } from '@angular/core';
import { FakestoreapiService } from '../serviços/fakestoreapi.service';
import { CarrinhoService } from '../serviços/carrinho.service'; // novo import

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
  standalone: false,
})
export class ListaPage implements OnInit {

  produtos: any[] = [];

  constructor(
    protected produto: FakestoreapiService,
    private carrinhoService: CarrinhoService 
  ) { }

  ngOnInit() {
    this.produto.getProdutos().subscribe((dados: any) => {
      this.produtos = dados;
    });
  }

  adicionarAoCarrinho(produto: any) {
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
