import { Service } from '@angular/core';
import { Inscricao } from '../interfaces/inscricao';

@Service()
export class InscricaoService {
    private inscricoes: Inscricao[] = [];
    private proximoId = 1;

    

    listar(): Inscricao[] {
        return this.inscricoes;
    }
    
    adicionar(nome: string , email:string): void{
        const nova: Inscricao = {
            id: this.proximoId++,
            nome: nome,
            email: email,
            status: false,
        };
        this.inscricoes.push(nova);
    }

    remover(id: number): void {
        const indice = this.inscricoes.findIndex(t => t.id === id);
        if (indice !== -1) {
            this.inscricoes.splice(indice,1)
        }
    }

    confirmarInscricao(id: number): void {
        const inscricao = this.inscricoes.find(t => t.id === id);
        if(inscricao) {
            inscricao.status = true;
        }
    }
}
