import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  degrees: any[] = [];
  constructor(private http: HttpClient) { }

  weather(){
    console.log('Boton presionado');

    const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=18.5001&lon=-69.9885&key=d9a7e5f8d38547aea32b694543ffcef0&include=minutely`;
    
    this.http.get(apiUrl).subscribe((response: any) => {
      console.log('Respuesta de la API: ', response);
      this.degrees = response;
    })

  }

  ngOnInit() {
  }

}
