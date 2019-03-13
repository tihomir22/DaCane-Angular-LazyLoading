import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anyadircard',
  templateUrl: './anyadircard.component.html',
  styleUrls: ['./anyadircard.component.scss']
})
export class AnyadircardComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    
  }
  notificarAlPadre(){
    this.notify.emit("Has soltado el torpedo")
  }

}
