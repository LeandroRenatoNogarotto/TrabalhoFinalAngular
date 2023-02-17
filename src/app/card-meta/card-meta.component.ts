import { Component } from '@angular/core';

@Component({
  selector: 'app-card-meta',
  templateUrl: './card-meta.component.html',
  styleUrls: ['./card-meta.component.css']
})
export class CardMetaComponent {
    value = 25;
    bufferValue = 100;
    
    meta = ` Emagrecer`;

    desc = ` dieta + treino`;

    progresso = ` 30%`;
}


