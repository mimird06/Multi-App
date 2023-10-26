import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Genero', url: '/genero', icon: 'male-female' },
    { title: 'Edad', url: '/edad', icon: 'people' },
    { title: 'Universidad', url: '/universidad', icon: 'school' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'Wordpress', url: '/wordpress', icon: 'globe' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'help' },
  ];

  constructor() {}
}
