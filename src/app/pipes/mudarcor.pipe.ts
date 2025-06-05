import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mudarcor',
  standalone: false,
})
export class MudarcorPipe implements PipeTransform {
  transform(value: string): string {
    return 'red'; // Sempre retorna vermelho
  }
}
