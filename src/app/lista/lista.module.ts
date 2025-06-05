import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClicksDirective } from '../diretivas/clicks.directive';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';
import { MudarcorPipe } from '../pipes/mudarcor.pipe';
import { CarrinhoService } from '../serviços/carrinho.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,
    ClicksDirective,
  ],
  declarations: [ListaPage, MudarcorPipe, ]
})
export class ListaPageModule {}
