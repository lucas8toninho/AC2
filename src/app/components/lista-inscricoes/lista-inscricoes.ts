import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../../services/inscricao-service';
import { Inscricao } from '../../interfaces/inscricao';

@Component({
  imports: [RouterLink],
  selector: 'app-lista-inscricoes',
  styleUrl: './lista-inscricoes.css',
  templateUrl: './lista-inscricoes.html',
})
export class ListaInscricoes {
  constructor(private inscricaoService: InscricaoService) {}

  get inscricao(): Inscricao[] {
    return this.inscricaoService.listar();
  }

  get total(): number {
    return this.inscricao.length;
  }

  get concluidas(): number {
    return this.inscricao.filter(t => t.status).length;
  }

  get pendentes(): number {
    return this.total - this.concluidas;
  }

  remover(id: number): void {
    this.inscricaoService.remover(id);
  }

  concluir(id: number): void {
    this.inscricaoService.confirmarInscricao(id);
  }
}
