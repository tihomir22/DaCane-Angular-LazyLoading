import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ContenidoCard } from './class/ContenidoCard';

@Component({
  selector: 'app-anyadircard',
  templateUrl: './anyadircard.component.html',
  styleUrls: ['./anyadircard.component.scss']
})
export class AnyadircardComponent implements OnInit {

  
  public _idCard:string;
  //para recibir del padre -cards- un id
  @Input('idCard')
  set idCard(id: string) {
      this._idCard = id;
      console.log(this._idCard)
  }
  //para enviar al padre --cards-- 
  @Output() notify: EventEmitter<ContenidoCard> = new EventEmitter<ContenidoCard>();

  private nombreCardDinamica:string;
  private descCardDinamica:string;

  constructor() { }

  ngOnInit() {
    
  }
  notificarAlPadre(){
    this.notify.emit(new ContenidoCard(this._idCard,this.nombreCardDinamica,this.descCardDinamica));
  }

}
