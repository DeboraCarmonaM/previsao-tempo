import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tempo',
  templateUrl: './card-tempo.component.html',
  styleUrls: ['./card-tempo.component.scss']
})
export class CardTempoComponent implements OnInit{

  @Input() public cidade: any = "";
  @Input() public uf: any = "";

  clima: any = "";
  id: number = 0;
  previsao: any = "";
  isLoading: boolean = false;
  erro: boolean = false;

  dataFormatada: any = "";

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    console.log(this.cidade);
    console.log(this.uf);
    this.getIdClimaTempo();
  }

  public getIdClimaTempo() {
    const url = "https://apiadvisor.climatempo.com.br/api/v1/locale/city?name="+this.cidade+"&state="+this.uf+"&token=c1cdba8979fd4fb41bf76d03b1d04eb9";
    console.log(url);
    this.http.get(`${url}`)
      .subscribe({
        next: (res) => {
          this.clima = res,
          this.id = this.clima[0].id;
          this.previsaoTempo(this.id);
        },

        error: (err) => {
          console.log(err);
        }
      })
  }

  public previsaoTempo(id: any) {
    const url = "https://apiadvisor.climatempo.com.br/api/v1/weather/locale/"+id+"/current?token=c1cdba8979fd4fb41bf76d03b1d04eb9";
    console.log(url);
    this.http.get(`${url}`)
      .subscribe({
        next: (res) => {
          this.previsao = res;
          console.log(this.previsao);
          this.isLoading = true;
        },
        error: (err) => {
          console.log(err);
          this.erro = true;
        }
      })
      this.dataFormatada = new Date(Date.now()).toLocaleString().split(',')[0];
  }


}
