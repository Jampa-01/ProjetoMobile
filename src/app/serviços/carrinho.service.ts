// services/carrinho.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private itens: any[] = [];

  getItens() {
    return this.itens;
  }

  adicionarAoCarrinho(produto: any) {
    this.itens.push(produto);
  }

  removerItem(index: number) {
    this.itens.splice(index, 1);
  }

  limparCarrinho() {
    this.itens = [];
  }

  getTotal() {
    return this.itens.reduce((soma, item) => soma + item.price, 0);
  }
}
