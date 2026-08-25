import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Feedback {
  titulo: string;
  descricao: string;
  rating: number;
}

const DEFAULT_FEEDBACKS: Feedback[] = [
  { titulo: 'Priscila Castanheira', rating: 5, descricao: 'Fomos ciceroneados pelo Eder em nossa estadia em Foz do Iguaçu. Foi um presente em nosso passeio. Eder conhece os pontos turísticos da cidade como ninguém. É prestativo, discreto, alegre e uma companhia muito bacana. Vale a pena demais, contratar os serviços com ele.' },
  { titulo: 'Carlos', rating: 5, descricao: 'Os passeios foram maravilhosos, muito bem organizados e com muita informação sobre os pontos turísticos. Super recomendo!' },
  { titulo: 'Fernanda', rating: 5, descricao: 'Simplesmente amei o passeio! A equipe é super profissional e torna a visita a Foz do Iguaçu ainda mais especial.' },
  { titulo: 'Luiza', rating: 5, descricao: 'Tivemos um atendimento excepcional. Todos os detalhes foram pensados com muito carinho e isso fez toda a diferença para nossa experiência.' },
  { titulo: 'Ricardo', rating: 5, descricao: 'Excelente organização e guias que sabem muito sobre a história e beleza de Foz do Iguaçu. Sem dúvida voltarei!' },
  { titulo: 'João', rating: 5, descricao: 'Passeio impecável! A visita aos pontos turísticos foi sensacional, e a qualidade do serviço foi de altíssimo nível.' },
];

/**
 * Mantém a lista de feedbacks em memória durante a sessão do usuário.
 * Quando alguém envia um novo feedback pelo formulário (comment.component),
 * ele é adicionado aqui e a lista exibida (feedbacks.component) atualiza
 * automaticamente, já que ambos compartilham esta mesma fonte de dados.
 *
 * Observação: como o site não tem backend/banco de dados, feedbacks novos
 * só ficam visíveis durante a sessão atual do navegador (não persistem
 * entre recarregamentos nem são vistos por outros visitantes). Eles também
 * são enviados por e-mail via EmailJS para o dono do site poder incluí-los
 * permanentemente depois.
 */
@Injectable({ providedIn: 'root' })
export class FeedbackService {
  private readonly feedbacksSubject = new BehaviorSubject<Feedback[]>([...DEFAULT_FEEDBACKS]);
  readonly feedbacks$ = this.feedbacksSubject.asObservable();

  addFeedback(feedback: Feedback): void {
    // Novos feedbacks aparecem primeiro
    this.feedbacksSubject.next([feedback, ...this.feedbacksSubject.value]);
  }
}
