import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-pessoal',
  templateUrl: './pagina-pessoal.component.html',
  styleUrls: ['./pagina-pessoal.component.css']
})
export class PaginaPessoalComponent {
  nome = `Leandro`;
  idade = 20;
  peso = `77 kg`;
  altura = `195 cm`;
}
