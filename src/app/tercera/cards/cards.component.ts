import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ContenidoCard } from '../anyadircard/class/ContenidoCard';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public _idCard:string;
  public listaCardsCreadas:Array<ContenidoCard>;

  //Para recoger el id card del padre -dashboard-
  @Input('idCard')
  set idCard(id: string) {
      this._idCard = id;
      console.log(this._idCard)
  }
  //modificar de forma dinamica con el renderer2
  @ViewChild("anyadirCardBox", { read: ElementRef }) addcardbox: ElementRef;

  //para enviar al padre con el notify un id nuevo
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  
  constructor( private renderer: Renderer2) {
    this.listaCardsCreadas=new Array<ContenidoCard>();
  }
  ngOnInit() {
  }

  public anyadirNuevaCardEjemplar(card:ContenidoCard): void {
    console.log("me ejecuto",card)
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'card');

    const cardbody = this.renderer.createElement('div');
    this.renderer.addClass(cardbody, 'card-body');
    this.renderer.appendChild(div, cardbody);

    const cardtitle = this.renderer.createElement('h4');
    this.renderer.addClass(cardtitle, 'card-title');
    const textTitle = this.renderer.createText(card.getNombre());
    this.renderer.appendChild(cardtitle, textTitle);
    this.renderer.appendChild(cardbody, cardtitle);

    const cardText = this.renderer.createElement('p');
    this.renderer.addClass(cardText, 'card-text');
    const parrafoCard = this.renderer.createText(card.getCardId()+"\n"+card.getDesc());
    this.renderer.appendChild(cardText, parrafoCard);
    this.renderer.appendChild(cardbody, cardText);

    const btnCard = this.renderer.createElement('button');
    this.renderer.addClass(btnCard, 'btn');
    this.renderer.addClass(btnCard, 'btn-primary');
    this.renderer.addClass(btnCard, 'btn-lg');
    this.renderer.addClass(btnCard, 'btn-block');

    const btntext = this.renderer.createText('New Btn');
    this.renderer.appendChild(btnCard, btntext);
    this.renderer.appendChild(div, btnCard);

    this.renderer.appendChild(this.addcardbox.nativeElement, div);
    this.listaCardsCreadas.push(card)
    this.notificarAlPadre();
  }
  
  notificarAlPadre(){
    this.notify.emit(Math.floor(Math.random() *1000)+"");
  }
}
