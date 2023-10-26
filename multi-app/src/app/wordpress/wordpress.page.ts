import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {

  link: any[] = [];
  constructor(private http: HttpClient) { }

  showNews(){
    console.log('Boton presionado.')

    const apiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=xzfPpYd6FIObtE3nJdzgxc0PAGaC7Hyp`;

    this.http.get(apiUrl).subscribe((response: any) => {
      console.log('Respuesta de la API: ', response);
      response.results.splice(0, response.results.length -3);
      this.link = response.results;
    });
  }

  ngOnInit() {
  }

}
