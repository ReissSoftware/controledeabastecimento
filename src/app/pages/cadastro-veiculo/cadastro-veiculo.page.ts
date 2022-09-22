import { MenuController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.page.html',
  styleUrls: ['./cadastro-veiculo.page.scss'],
})
export class CadastroVeiculoPage implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController) { }

  marcas: any[] = []
  modelos: any[] = []

  ngOnInit() {
    this.menuCtrl.enable(true)
  }

}
