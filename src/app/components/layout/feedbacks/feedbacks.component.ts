import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent {

  comments: { titulo: string, descricao: string }[] = [];

  constructor(){}

  ngOnInit(): void {
    this.loadDefaultComments();
  }

  loadDefaultComments(): void {

    this.comments = [
      { titulo: 'Priscila Castanheira', descricao: 'Fomos ciceroneados pelo Eder em nossa estadia em Foz do Iguaçu. Foi um presente em nosso passeio. Eder conhece os pontos turísticos da cidade como ninguém. É prestativo, discreto, alegre e uma companhia muito bacana. Vale a pena demais, contratar os serviços com ele.' },
      { titulo: 'Carlos', descricao: 'Os passeios foram maravilhosos, muito bem organizados e com muita informação sobre os pontos turísticos. Super recomendo!' },
      { titulo: 'Fernanda', descricao: 'Simplesmente amei o passeio! A equipe é super profissional e torna a visita a Foz do Iguaçu ainda mais especial.' },
      { titulo: 'Luiza', descricao: 'Tivemos um atendimento excepcional. Todos os detalhes foram pensados com muito carinho e isso fez toda a diferença para nossa experiência.' },
      { titulo: 'Ricardo', descricao: 'Excelente organização e guias que sabem muito sobre a história e beleza de Foz do Iguaçu. Sem dúvida voltarei!' },
      { titulo: 'João', descricao: 'Passeio impecável! A visita aos pontos turísticos foi sensacional, e a qualidade do serviço foi de altíssimo nível.' }
    ];

  }

  loadComments(comments: { titulo: string, descricao: string }[]): void {
    this.comments = comments;
  }
}
