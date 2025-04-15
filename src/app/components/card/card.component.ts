import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() imagem: string = '';
  @Input() atividades: string = '';
  @Input() whatsNumero: string = '';

  get whatsappUrl(): string {
    const mensagem = `Olá, gostaria de saber mais sobre ${this.titulo}`;
    return `https://api.whatsapp.com/send?phone=${this.whatsNumero}&text=${encodeURIComponent(mensagem)}`;
  }

}
