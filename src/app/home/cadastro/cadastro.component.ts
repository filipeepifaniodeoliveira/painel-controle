import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  viewProviders: [CadastroService]
})
export class CadastroComponent implements OnInit {

  constructor(
    public cadastroService: CadastroService
  ) { }

  ngOnInit() {
  }

  onCadastro(form): void {
    this.cadastroService.cadastro(form.value).subscribe(res => {
      if (!res) {
        // exibir mensagem de erro
      } else {

      }
    });
  }

}
