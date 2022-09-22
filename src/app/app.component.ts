import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Inicial', url: 'home', icon: 'home' },
    { title: 'Cadastrar Veículo', url: 'cadastro-veiculo', icon: 'cloud-upload'},
  ];
  constructor() {}
}
