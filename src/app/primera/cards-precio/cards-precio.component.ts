import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cards-precio',
  templateUrl: './cards-precio.component.html',
  styleUrls: ['./cards-precio.component.scss']
})
export class CardsPrecioComponent implements OnInit {

  @Input() valorCardA:number;
  @Input() valorCardB:number;
  @Input() valorCardC:number;

  constructor() { }

  ngOnInit() {
    console.log(this.valorCardA);
  }

}
