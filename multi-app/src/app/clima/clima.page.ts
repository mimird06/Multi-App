import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  degrees: any[] = [];
  lat: number = 0;
  long: number = 0;
  constructor(private http: HttpClient) { }

  weather(){
    console.log('Boton presionado');

    const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${this.lat}&lon=${this.long}&key=d9a7e5f8d38547aea32b694543ffcef0&include=minutely`;

    this.http.get(apiUrl).subscribe((response: any) => {
      console.log('Respuesta de la API: ', response);
      this.lat = response.lat;
      this.long = response.lon;
      this.degrees = response.data;
    })

  }

  ngOnInit() {
  }

}
