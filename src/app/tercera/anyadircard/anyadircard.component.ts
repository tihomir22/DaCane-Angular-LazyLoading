import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContenidoCard } from './class/ContenidoCard';

@Component({
  selector: 'app-anyadircard',
  templateUrl: './anyadircard.component.html',
  styleUrls: ['./anyadircard.component.scss']
})
export class AnyadircardComponent implements OnInit {

  @Output() notify: EventEmitter<ContenidoCard> = new EventEmitter<ContenidoCard>();

  private nombreCardDinamica:string;
  private descCardDinamica;string;

  constructor() { }

  ngOnInit() {
    
  }
  notificarAlPadre(){
    this.notify.emit(new ContenidoCard(this.nombreCardDinamica,this.descCardDinamica));
  }

}
