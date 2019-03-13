import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe, of, from, combineLatest, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Cuenta } from '../login/class/Cuenta';
import { plainToClass } from 'class-transformer';
import { ContenidoCard } from '../anyadircard/class/ContenidoCard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private usuario: Cuenta;
  public listaCardsCreadas:Array<ContenidoCard>;
 
  @ViewChild("anyadirCardBox", { read: ElementRef }) addcardbox: ElementRef;

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {
    this.listaCardsCreadas=new Array<ContenidoCard>();
  }

  ngOnInit() {
    this.leerCredenciasPorParams();
    console.log(this.addcardbox)
  }

  public leerCredenciasPorParams(): void {
    this.getPeticiones();
  }
  public anyadirNuevaCardEjemplar(card:ContenidoCard): void {
    console.log("me ejecuto",event)
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
    const parrafoCard = this.renderer.createText(card.getDesc());
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
  }


  public getPeticiones(): void {
    combineLatest(
      this.route.params,
      this.route.queryParams,
      (params, qparams) => ({ params, qparams })).pipe(filter(ob => ob != undefined))
      .subscribe(ap => {
        if (ap.params['user'] != undefined) {
          this.usuario = plainToClass(Cuenta, ap.params);
        }
        if (ap.qparams['user'] != undefined) {
          this.usuario = plainToClass(Cuenta, ap.qparams);
        }
        console.log(this.usuario)

      })

  }

}
