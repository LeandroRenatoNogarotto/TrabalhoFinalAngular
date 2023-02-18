import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-meta',
  templateUrl: './card-meta.component.html',
  styleUrls: ['./card-meta.component.css']
})
export class CardMetaComponent {
  @Input() desc = 'Calorias diarias';
  @Input() tipo = '';
  bufferValue = 100;
  meta = 2000;
  progresso = 750;
  value = (this.progresso*100)/this.meta;
  porcent: string = this.value + '%';
}


