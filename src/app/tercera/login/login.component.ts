import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuenta } from './class/Cuenta';
import { plainToClass } from "class-transformer";
import { Router } from '@angular/router';
import { UsuariosService} from '../../usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public static itemsAEliminar=10;
  public usuario: string;
  public contrasenya: string;
  private arrayCredencialesLogin: Array<Cuenta>;
  public arrayCredencialesLoginAux: Array<Cuenta>;

  public errorAlLogearse: boolean = false;

  constructor(private http: HttpClient, private router: Router,private servicioUsuario:UsuariosService) {
    this.arrayCredencialesLogin = new Array<Cuenta>()
  }
  ngOnInit() {
    this.servicioUsuario.getAll().subscribe((data) => {
      this.arrayCredencialesLogin=data;
      this.arrayCredencialesLoginAux=data;
      console.log("Recibo del server" , data)
    }, (error) => {
      console.log(error)
    }, () => {
      console.log("hemos terminado")
    })
  }
  public comprobarUsuarioYContrasenya(user: string, pass: string): Cuenta {
    let res: Cuenta = null;
    this.arrayCredencialesLogin.forEach(cuenta => {
      //Se mapea el json a un objecto cuenta
      let userParseado: Cuenta = plainToClass(Cuenta, cuenta);
      if (userParseado.usuario == user && userParseado.pass == pass) {
        res = userParseado;
        console.log("login correcto", res);
        this.router.navigate(['login/dashboard/'], { queryParams: { user: res.usuario, pass: res.pass } });
      }
    });
    
    if (res == null) {
      this.errorAlLogearse = true;
    }
    return res;
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/loginaccounts.json");
  }
  public modificarArray(numeroIndex:number){
    this.arrayCredencialesLoginAux=this.arrayCredencialesLogin.splice((numeroIndex-LoginComponent.itemsAEliminar),LoginComponent.itemsAEliminar)
    console.log(this.arrayCredencialesLoginAux)
  }

}
