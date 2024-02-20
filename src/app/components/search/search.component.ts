import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  @Output() public enviarDados = new EventEmitter();
  @Output() public enviarDadosLocalidade = new EventEmitter();

  endereco: any = "";
  localidade: any = "";
  uf : any = "";

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  }

  public getDados() {
    this.enviarDadosLocalidade.emit(this.localidade);
    this.enviarDados.emit(this.uf);
  }
  
  public buscarCep(cep: string) {
    if(cep.length == 8) {
      const url = 'https://viacep.com.br/ws/' + cep + '/json';
      this.http.get(`${url}`)
        .subscribe({
          next: (res) => {
            this.endereco = res,
            this.localidade = this.endereco.localidade;
            this.uf = this.endereco.uf;
            console.log(this.endereco);
            this.getDados();
          },
            
          error: (err) => {
            console.log(err);
          }
        });
    }
      
  }

}
