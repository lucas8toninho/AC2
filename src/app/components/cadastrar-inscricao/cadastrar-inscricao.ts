import { Component } from '@angular/core';
import { InscricaoService } from '../../services/inscricao-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-cadastrar-inscricao',
  styleUrl: './cadastrar-inscricao.css',
  templateUrl: './cadastrar-inscricao.html',
})
export class CadastrarInscricao {
  nome = '';
  email = '';
  
  constructor(private inscricaoService: InscricaoService) {}

  cadastrar(): void {
    if (!this.nome.trim()) {
      return;
    }
    this.inscricaoService.adicionar(this.nome.trim(), this.email);
    this.nome = '';
    this.email = '';
  }
}