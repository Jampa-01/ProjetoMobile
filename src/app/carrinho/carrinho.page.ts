import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../serviços/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  standalone: false,  
})
export class CarrinhoPage implements OnInit {
  itens: any[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.itens = this.carrinhoService.getItens();
  }

  remover(index: number) {
    this.carrinhoService.removerItem(index);
    this.itens = this.carrinhoService.getItens(); // atualizar a lista
  }

  getTotal() {
    return this.carrinhoService.getTotal();
  }
}
