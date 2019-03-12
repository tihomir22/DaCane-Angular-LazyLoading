import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario:string;
  contrasenya:string;

  constructor() { }

  ngOnInit() {

  }
  imprimirVarsDeLaVista(){
    console.log(this.usuario)
    console.log(this.contrasenya)
  }

}
