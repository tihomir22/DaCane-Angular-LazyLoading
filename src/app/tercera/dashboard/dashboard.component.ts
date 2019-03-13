import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe, of, from, combineLatest, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Cuenta } from '../login/class/Cuenta';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private usuario: Cuenta;
  @ViewChild("anyadirCardBox", { read: ElementRef }) addcardbox: ElementRef;

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.leerCredenciasPorParams();
    console.log(this.addcardbox)
  }

  public leerCredenciasPorParams(): void {
    this.getPeticiones();
  }
  public anyadirNuevaCardEjemplar():void{
    console.log("me ejecuto")
    const div = this.renderer.createElement('div');
    /*
    this.renderer.addClass(div, 'card');
    const cardbody=this.renderer.createElement('div');
    this.renderer.addClass(div, 'card-body');
    this.renderer.appendChild(div, cardbody);
    */
    const text = this.renderer.createText('full de mango');
    //this.renderer.appendChild(cardbody,text);
    this.renderer.appendChild(div,text);
    
    
    this.renderer.appendChild(this.addcardbox.nativeElement, div);
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
