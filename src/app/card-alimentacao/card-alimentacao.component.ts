import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-alimentacao',
  templateUrl: './card-alimentacao.component.html',
  styleUrls: ['./card-alimentacao.component.css']
})
export class CardAlimentacaoComponent {
  @Input() dia: string = '';
  @Input() almoco: string = '';
  @Input() janta: string = '';
  isToday: boolean = false;

  constructor(){
    console.log(new Date().getDay());
  }
}
