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
  public idCard:string;
  
 
  @ViewChild("anyadirCardBox", { read: ElementRef }) addcardbox: ElementRef;


  constructor(private route: ActivatedRoute) {
   
  }

  ngOnInit() {
    this.getPeticiones();
  }
  public recogerNuevoId($event):void{
    console.log($event)
    this.idCard=$event;
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
        //console.log(this.usuario.getUser())
        this.idCard=window.btoa(this.usuario.getUser()+"");

      })

  }

}
