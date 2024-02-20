import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

 public localidade : any = "";
 public uf : any = "";
 teste: boolean = false;

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.localidade = "São Paulo";
  }

  public setDados(event: any) {
    this.uf = event;
    console.log(this.uf, "uf");
    this.teste = true;
  }

  public setDadosLocalidade(event: any) {
    this.localidade = event;
    console.log(this.localidade, "localidade");
  }

  

}
