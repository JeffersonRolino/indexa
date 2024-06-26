import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json';
import { ContatoComponent } from './componentes/contato/contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.contatos.filter((contato) => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}
