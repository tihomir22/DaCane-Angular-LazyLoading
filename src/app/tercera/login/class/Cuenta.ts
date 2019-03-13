import { CuentaInferface } from './CuentaInterface';

export class Cuenta implements CuentaInferface {
    usuario: string;    pass: string;
    constructor(){
        
    }

    getUser(){
        return this.usuario;
    }
    getPass(){
        return this.pass;
    }
    setUser(user:string){
        this.usuario=user;
    }
    setPass(pass:string){
        this.pass=pass;
    }

    
    
  }