import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {
  name: string = '';
  gender: string = '';
  color: string = '';

  constructor(private http: HttpClient) { }

  predecir(){
    const apiUrl = `https://api.genderize.io/?name=${this.name}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      console.log('Respuesta de la API:', response);
      this.gender = response.gender;
      this.color = this.gender === 'male' ? 'blue' : 'pink';
    });
  }
  ngOnInit() {
  }

}
