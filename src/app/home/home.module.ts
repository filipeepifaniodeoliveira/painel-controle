import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../auth/services/auth.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { AdmComponent } from './adm/adm.component';
import { CadastroService } from './services/cadastro.service';

@NgModule({
  declarations: [ 
    HomeComponent,
    CadastroComponent, 
    ListagemComponent, 
    AdmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [CadastroService, AuthService]

})
export class HomeModule { }
