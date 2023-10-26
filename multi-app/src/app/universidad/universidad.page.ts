import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.page.html',
  styleUrls: ['./universidad.page.scss'],
})
export class UniversidadPage implements OnInit {
  country: string = '';
  universities: any[] = [];


  constructor(private http: HttpClient) { }
  uniInfo(){

    console.log('Boton presionado');

    const apiUrl = `http://universities.hipolabs.com/search?country=${this.country}`;

    this.http.get(apiUrl).subscribe((response: any) =>{
      console.log('Respuesta de la API: ', response);
      this.universities = response;
    });
  }
  ngOnInit() {
  }

}
