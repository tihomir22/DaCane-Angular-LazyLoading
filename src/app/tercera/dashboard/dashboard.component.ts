import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private username: string;
  private pass: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.leerCredenciasPorParams();
  }
  public leerCredenciasPorParams(): void {

    this.route.params
      .subscribe(params => {
        this.username = params['user'] || "torpedo";
        this.pass = params['pass'] || "torpedo";

        console.log(this.username)
        console.log(this.pass);
      });
    if (this.username == "torpedo" && this.pass == "torpedo") {
      this.route.queryParamMap.subscribe(params => {
        this.username = params.get('user');
        this.pass = params.get('pass');
        console.log(this.username)
        console.log(this.pass);
      });
    }


  }

}
