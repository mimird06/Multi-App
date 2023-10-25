import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
  age: string = '';
  name: string = '';
  imageUrl: string = '';
  etapa: string = '';

  constructor(private http: HttpClient) { }

  agePredictor(){
    console.log('Botton presionado');

    const apiUrl = `https://api.agify.io/?name=${this.name}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      console.log('Respuesta de la API:', response);
      this.age = response.age;
      this.updateImage();
    });
  }

  updateImage(){

    const age = parseInt(this.age, 10);

    if (age < 21){
      this.etapa = 'joven';
      this.imageUrl = 'assets/jovenes.png';
    } else if (age >=22 && age <=49) {
      this.etapa = 'adulto';
      this.imageUrl = 'assets/adulto.png';
    } else {
      this.etapa = 'viejo';
      this.imageUrl = 'assets/viejo.png';
    }

  };

  ngOnInit() {
  }

}
